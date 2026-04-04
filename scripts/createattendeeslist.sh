> attendeslist_html.txt
while IFS= read -r line; do
    echo "        <option value=\"$line\"/>" >> attendeslist_html.txt
done < /home/dave/Documents/Development/WeddingSite/scripts/attendees.txt