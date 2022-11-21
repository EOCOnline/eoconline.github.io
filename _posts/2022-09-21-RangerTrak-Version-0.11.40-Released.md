---
title: "RangerTrak v 0.11.40 Release Notes"
date: 2022-91-21T00:00:00-00:00
categories:
  - blog
tags:
  - RangerTrak
  - EOC.online
  - Release notes
---

RangerTrak v 0.11.40 Release Notes

Details/release notes follow, and are only listed as a record of things – nothing users
need plough through!

The great notes I got from Kevin last spring follow, plus a few I noticed too. (Feel free
to amplify/correct my notes Kevin or anyone.)

Issues with www.RangerTrak.org v 0.11.33, hopefully largely resolved with version 0.11.40:
[] Make project public: www.github.com/EOConline/Rangertrak so Kevin (and others) have
source code access – and even the ability to contribute changes should anyone be so daring
(kooky?!) to attempt that. [] Move the location of the address (Google’s Plus codes,
What3Words, and Street Addresses) entry field below the Lat/LNG entry as it is not used as
much as anticipated currently. [] Separate whole (integer) from the decimal portion of the
Lat/Long entry fields, as the former doesn’t change and can be tabbed over. [] Team status
codes can be edited in the settings panel, along with an associated background color for
the Field Report display. (Also in future to affect markers on the two map displays.) Also
added color picker. [] Mouse clicks on the Google Map no longer automatically drop
additional markers. (This is now an option in Settings.) [] Label the mini-map on the Home
Entry screen – to clarify it is only showing the current entry’s location [] Leaflet map
now displays properly, albeit with more features to come. [] Test & fix tab order of entry
fields to enhance pure keyboard entry of data [] Auto update version number [] The list of
Rangers can be edited, a new Ranger can be added [] Add !CmdPost as a standard Tactical
Sign, for noting command post setup and shutdown times, and other events [] Add code to
publish Field Reports to a web server if Internet is up [] \*Refresh page/tables/maps
automatically to immediately display new data [] Highlight currently active page/pane in
navbar at top [] Marker Clusters work [] Ease time entry with time picker [] Internal
refactoring & code cleanup [] Advanced option in Settings page now resets values properly
[] Use leaflet maps on entry screen (they can work offline) [] The log works: displays
field report entries and other key actions in the log (currently way too verbose) [] Only
display 4 digits of Lat/Long (If folks enter more, they will NOT be maintained: OK?) []
Refactored location entry to a new independent component [] Rangers & Field-Reports:
Better column sizing & reduce row height; only display 4 or 5 digits on lat/long [] Status
only applies to field reports: not rangers, not teams, etc. [] Settings for Google vs
Leaflet maps can differ

## Known issues with current version:

[] Pages may not display properly until navigated to a few times (keep clicking on the
page name at the top…) [] Untested on mobile sized devises

## Still to come (Or may now work but needs testing)

[] Auto-center google map (Big & small) initially (i.e., based on entered
location/existing markers – NOT geolocation), cluster markers, zoom factor fixed []
VashonEOC.org (or other) webserver to display Ranger Field Reports for general viewing by
the EOC, individual Rangers, etc. – providing they have Internet access [] Hide API keys
and ranger phone numbers/images [] Maps:

- Change markers on the map displays based on team.
- Leaflet markers to have nice pop-up
- Auto-filter/selection of Rangers & Field Reports on those grids auto reflected on maps
- Alter color of the markers on maps a bit by elapsed time?

[] Location Entry:

- Verify Location entry: any change updates all others (via event subscription) [Are we
  using Angular Reactive forms to their full potential? Learn more & forge ahead.]
- Current Location Map on Entry screen to also optionally display other markers, but
  dimmed?
- What3Words codes – once a bug on their side gets fixed.
- Refactor callsign entry to a new independent component?

[] Ranger & Field Report Pages/grids

- Get import of Rangers & Field Reports from JSON/Excel files working

[] Better documentation within the app:

- More info buttons
- Mission setup and shut down checklists: download & email field reports… [] LOTS more
  testing, esp. on smaller devices [] Restyle for especial esthetics [] Verify offline
  functionality

## For future consideration, probably not anytime soon, unless encouraged by others [] Misc:

- Allow multiple sets of preferences (settings) [] More Team tracking & functionality:
- How to plan/schedule next shift of rangers, show yesterday’s (or last week’s activity
- Drag ‘n Drop of unaffiliated Rangers to a team; allow noting position within a team:
  lead, COMMs, Safety Officer, navigator, etc.
- Rangers page to show Rangers still checked out, Time since check-in, etc.
- Any need for Status Updates to be tied to a list of Missions/Tasks/Objectives, perhaps
  from another system like Excel? Then each team has a list of activities to be checked
  off: but Cmd Post/EOC can see progress?
- Is there a need to record every individual is in which team: team (re)assignments?
- Alarms if overdue or if they stray out of a geo-fence
- On hover: display a Team Status tooltip: name, assigned rangers, contact info, recent
  reports, time in the field, assignments, etc. [] Maps:
- Publish our waypoints to GiaiGPS.com (very possible, but relies on Internet from base
  station to GaiaGPS.com, their (unknown) latency to update their published maps with our
  data in anything near real-time, and Internet access of our rangers to then get the new
  data on the Gaia servers: i.e., will never be updated real-time. (I think free users can
  also add custom layers.)
  https://help.gaiagps.com/hc/en-us/articles/115003639948-Import-Maps-and-Data-with-Mapbox-Studio
- THE ABOVE IS NOT GOING TO HAPPEN DUE TO GAIA POLICY: Much easier would be for us to
  periodically grab Gaia Track data and add that as a static layer on the leaflet map,
  along with a host of other public layers. The track data is super, but others track data
  doesn’t change much… (Perhaps others will want to add their own layers – with tracks or
  whatever – to our maps. That should be possible.)
- Allow drawing lines, rectangles, placement of icons from a pallet (e.g., restrooms, cmd
  post, search boundaries, etc.)
