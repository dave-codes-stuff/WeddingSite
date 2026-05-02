SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ATTENDEES="$SCRIPT_DIR/attendees.txt"
RSVP="$SCRIPT_DIR/../src/components/rsvp.astro"

NEW_OPTIONS=""
while IFS= read -r line; do
    FORMATTED="        <option value=\"$line\"/>"
    NEW_OPTIONS="$NEW_OPTIONS$FORMATTED\n"
    echo "Added: $FORMATTED"
done < "$ATTENDEES"

awk -v new_options="$NEW_OPTIONS" '
    /<!-- ATTENDEES_START -->/ { print; printf "%s", new_options; skip=1 }
    /<!-- ATTENDEES_END -->/ { skip=0 }
    !skip { print }
' "$RSVP" > "$RSVP.tmp" && mv "$RSVP.tmp" "$RSVP"

echo ""
echo "rsvp.astro updated: $RSVP"
