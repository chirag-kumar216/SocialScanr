import streamlit as st
import preprocessor
import helper
import matplotlib.pyplot as plt
import seaborn as sns
from PIL import Image
import numpy as np
from matplotlib.font_manager import FontProperties  # Import FontProperties
import matplotlib.font_manager as fm  # Import font_manager for font paths

# Get the font path for "Segoe UI Emoji" (replace with the correct path)
font_path = fm.findSystemFonts(fontpaths=None, fontext="ttf")
font_path = [path for path in font_path if "seguiemj.ttf" in path][0]

# Create a FontProperties object with the "Segoe UI Emoji" font
font_prop = FontProperties(fname=font_path)  # Use the discovered font path

# Define the color scheme
primary_color = "#4b6cb7"
text_color = "#1ABC9C"
secondary_color = "#182848"

# Custom CSS for styling
st.markdown(
    f"""
    <style>
    .container {{
        background: linear-gradient(135deg, {primary_color}, {secondary_color});
        padding: 20px;
        border-radius: 10px;
    }}

    .my-text {{
        color: {text_color};
        font-weight: bold;
        font-size: 60px;
        margin-top: -20px; /* Adjust the margin to move the text upward */
    }}

    .header {{
        text-align: center;
        font-size: 24px;
        padding: 20px;
    }}

    .stats button:hover {{
        background-color: {primary_color};
        color: white;
    }}

    /* Add pulse animation to stats buttons */
    .stats button.pulse {{
        animation: pulse 2s infinite;
    }}
    
    img {{
        width: 704px;
    }}

    @keyframes pulse {{
        0% {{
            transform: scale(1);
        }}
        50% {{
            transform: scale(1.1);
        }}
        100% {{
            transform: scale(1);
        }}
    }}
    </style>
    """, unsafe_allow_html=True)

# Use the CSS classes in your content
with st.container():
    st.markdown(f'<p class="my-text">WhatsApp Chat Analyzer</p>', unsafe_allow_html=True)

image = Image.open('analysis.jpg')
st.image(image)


st.sidebar.markdown("Upload a WhatsApp chat text file:")
uploaded_file = st.file_uploader("Choose a file")
if uploaded_file is not None:
    bytes_data = uploaded_file.getvalue()
    data = bytes_data.decode("utf-8")
    df = preprocessor.preprocess(data)

    st.dataframe(df)

    user_list = df['user'].unique().tolist()
    user_list.remove('group_notification')
    user_list.sort()
    user_list.insert(0, "Overall")

    selected_users = st.sidebar.multiselect("Show analysis for users", user_list)
    start_date = st.sidebar.date_input("Select start date", df['only_date'].min())
    end_date = st.sidebar.date_input("Select end date", df['only_date'].max())
    if start_date > end_date:
        st.error("End date must be after the start date.")
    else:
        # Filter the data based on the selected date range
        df = df[(df['only_date'] >= start_date) & (df['only_date'] <= end_date)]

    if st.button("Show Analysis", key="show_analysis"):
        st.title("Top Statistics")

        for selected_user in selected_users:
            num_messages, words, num_media_msgs, num_links = helper.fetch_stats(selected_user, df)
            st.subheader(f"Statistics for {selected_user}")
            col1, col2, col3, col4 = st.columns(4)

            with col1:
                st.header("Total Messages")
                st.title(num_messages)

            with col2:
                st.header("Total Words")
                st.title(words)

            with col3:
                st.header("Total Media Messages")
                st.title(num_media_msgs)

            with col4:
                st.header("Total URLs")
                st.title(num_links)

            # Monthly timeline
            st.title("Monthly Timeline")
            timeline = helper.monthly_timeline(selected_user, df)
            fig, ax = plt.subplots()
            ax.plot(timeline['time'], timeline['message'], color='green')
            ax.set_xlabel('Time')
            ax.set_ylabel('Message')
            plt.xticks(rotation='vertical')
            st.pyplot(fig)

            # Daily timeline
            st.title("Daily Timeline")
            daily_timeline = helper.daily_timeline(selected_user, df)
            fig, ax = plt.subplots()
            ax.plot(daily_timeline['only_date'], daily_timeline['message'], color='black')
            ax.set_xlabel('Date')
            ax.set_ylabel('Message')
            plt.xticks(rotation='vertical')
            st.pyplot(fig)

            # Activity map
            st.title('Activity Map')
            col1, col2 = st.columns(2)

            with col1:
                st.markdown('<h3 class="activity">Most Busy Day</h3>', unsafe_allow_html=True)
                busy_day = helper.week_activity_map(selected_user, df)
                fig, ax = plt.subplots()
                ax.bar(busy_day.index, busy_day.values, color='purple')
                ax.set_xlabel('Day')
                ax.set_ylabel('Activity')
                plt.xticks(rotation='vertical')
                st.pyplot(fig)

            with col2:
                st.markdown('<h3 class="activity">Most Busy Month</h3>', unsafe_allow_html=True)
                busy_month = helper.month_activity_map(selected_user, df)
                fig, ax = plt.subplots()
                ax.bar(busy_month.index, busy_month.values, color='orange')
                ax.set_xlabel('Month')
                ax.set_ylabel('Activity')
                plt.xticks(rotation='vertical')
                st.pyplot(fig)

            st.title("Weekly Activity Map")
            user_heatmap = helper.activity_heatmap(selected_user, df)
            fig, ax = plt.subplots()
            ax = sns.heatmap(user_heatmap)
            ax.set_xlabel('Day of Week')
            ax.set_ylabel('Week of Year')
            st.pyplot(fig)

            if selected_user == 'Overall':
                st.title('Most Busy Users')
                x, new_df = helper.most_busy_users(df)
                fig, ax = plt.subplots()
                col1, col2 = st.columns(2)

                with col1:
                    ax.bar(x.index, x.values, color='red')
                    ax.set_xlabel('User')
                    ax.set_ylabel('Activity')
                    plt.xticks(rotation='vertical')
                    st.pyplot(fig)

                with col2:
                    st.dataframe(new_df)

            st.title("Wordcloud")
            df_wc = helper.create_wordcloud(selected_user, df)
            fig, ax = plt.subplots()
            ax.imshow(df_wc)
            st.pyplot(fig)

            st.title('Most Common Words')
            most_common_df = helper.most_common_words(selected_user, df)
            fig, ax = plt.subplots()
            ax.barh(most_common_df[0], most_common_df[1])
            ax.set_xlabel('Frequency')
            ax.set_ylabel('Word')
            plt.xticks(rotation='vertical')
            st.pyplot(fig)


            # Create a radial pie chart
            emoji_df = helper.emoji_helper(selected_user, df)
            st.title("Emoji Analysis")

            if emoji_df.empty:
                st.header("No Emojis Shared")
            else:
                # Create a radial pie chart
                labels = emoji_df[0].head().tolist()  # Emoji labels
                sizes = emoji_df[1].head().tolist()  # Emoji frequencies

                # Normalize sizes to sum to 1
                sizes = [size / sum(sizes) for size in sizes]

                fig, ax = plt.subplots(subplot_kw={'projection': 'polar'})

                # Angle for each slice
                angles = np.linspace(0, 2 * np.pi, len(labels), endpoint=False).tolist()

                # Make a complete circle
                sizes += sizes[:1]
                angles += angles[:1]

                # Plot the radial pie chart with the specified font
                ax.fill(angles, sizes, 'b', color='yellow', alpha=0.9)
                ax.set_xticks(angles[:-1])
                ax.set_xticklabels(labels, fontproperties=font_prop)  # Set the font for labels
                ax.set_yticklabels([])

                st.pyplot(fig)


