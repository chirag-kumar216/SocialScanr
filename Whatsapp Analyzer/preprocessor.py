import re  # Import the regular expression library.
import pandas as pd  # Import the pandas library for data manipulation.

def preprocess(data):
    # Define regular expression patterns for two different date-time formats
    pattern = '\d{1,2}/\d{1,2}/\d{2,4},\s\d{1,2}:\d{2}\s-\s'  # Example: "12/31/2021, 10:30 -"
    pattern1 = r'\d{1,2}/\d{1,2}/\d{2,4},\s\d{1,2}:\d{2}\s[APap][Mm]\s-\s'  # Example: "12/31/2021, 10:30 AM -"

    if len(re.split(pattern, data)[1:]) != 0:
        # If the data matches pattern (the first format)

        # Split the data into messages and dates
        messages = re.split(pattern, data)[1:]
        dates = re.findall(pattern, data)

        # Create a DataFrame with user messages and message dates
        df = pd.DataFrame({'user_message': messages, 'message_date': dates})

        # Convert message_date type to datetime, assuming the format is '%m/%d/%y, %H:%M - '
        df['message_date'] = pd.to_datetime(df['message_date'], format='%m/%d/%y, %H:%M - ')

        # Separate users and messages
        users = []
        messages = []
        for message in df['user_message']:
            entry = re.split('([\w\W]+?):\s', message)
            if entry[1:]:  # User name found
                users.append(entry[1])
                messages.append(entry[2])
            else:
                users.append('group_notification')
                messages.append(entry[0])

        df['user'] = users
        df['message'] = messages
        df.drop(columns=['user_message'], inplace=True)

        # Extract year, month, day, hour, and minute from the date
        df['only_date'] = df['message_date'].dt.date
        df['year'] = df['message_date'].dt.year.astype(int)
        df['month_num'] = df['message_date'].dt.month
        df['month'] = df['message_date'].dt.month_name()
        df['day'] = df['message_date'].dt.day
        df['day_name'] = df['message_date'].dt.day_name()
        df['hour'] = df['message_date'].dt.hour
        df['minute'] = df['message_date'].dt.minute

        period = []
        for hour in df[['day_name', 'hour']]['hour']:
            if hour == 23:
                period.append(str(hour) + "-" + str('00'))
            elif hour == 0:
                period.append(str('00') + "-" + str(hour + 1))
            else:
                period.append(str(hour) + "-" + str(hour + 1))
        df['period'] = period

    else:
        # If the data matches pattern1 (the second format)

        # Split the data into messages and dates
        messages = re.split(pattern1, data)[1:]
        dates = re.findall(pattern1, data)

        # Create a DataFrame with user messages and message dates
        df = pd.DataFrame({'user_message': messages, 'message_date': dates})

        # Remove any non-breaking spaces (\u2009) or other whitespace characters from message_date
        df['message_date'] = df['message_date'].str.replace(r'[\s\u2000-\u200A]+', ' ')

        # Remove commas from the message_date column
        df['message_date'] = df['message_date'].str.replace(',', '')

        # Convert message_date type to datetime, assuming the format is '%d/%m/%Y %I:%M %p - '
        df['message_date'] = pd.to_datetime(df['message_date'], format='%d/%m/%Y %I:%M %p - ')

        # Separate users and messages
        users = []
        messages = []
        for message in df['user_message']:
            entry = re.split('([\w\W]+?):\s', message)
            if entry[1:]:  # User name found
                users.append(entry[1])
                messages.append(entry[2])
            else:
                users.append('group_notification')
                messages.append(entry[0])

        df['user'] = users
        df['message'] = messages
        df.drop(columns=['user_message'], inplace=True)

        # Extract year, month, day, hour, and minute from the date
        df['only_date'] = df['message_date'].dt.date
        df['year'] = df['message_date'].dt.year.astype(int)
        df['month_num'] = df['message_date'].dt.month
        df['month'] = df['message_date'].dt.month_name()
        df['day'] = df['message_date'].dt.day
        df['day_name'] = df['message_date'].dt.day_name()
        df['hour'] = df['message_date'].dt.hour
        df['minute'] = df['message_date'].dt.minute


        period = []
        for hour in df[['day_name', 'hour']]['hour']:
            if hour == 23:
                period.append(str(hour) + "-" + str('00'))
            elif hour == 0:
                period.append(str('00') + "-" + str(hour + 1))
            else:
                period.append(str(hour) + "-" + str(hour + 1))
        df['period'] = period




    return df  # Return the preprocessed DataFrame.
