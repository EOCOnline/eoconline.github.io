---
title: "RangerTrak™"
meta_title: "Track & map search & rescue members reporting via radio, without reliable cell or internet access "
description: "RangerTrak allows you to track & map search & rescue members reporting via radio, without reliable cell or internet access"
type: resource
date: 2022-04-04T05:00:00Z
created: 2022-04-04T05:00:00Z
reviewed: 2024-06-27T05:00:00Z
authors: "John Cornelison"
image: "images/rangertrak/rangertrak.png"
categories: []
tags: []
topics: ["Application", "RangerTrak"]
keywords: ["ARES", "ACS", "Ham Radio", "CERT", "search & rescue", SAR]
draft: false
---

The RangerTrak™ application aids tracking & mapping CERT, ACS, wildland firefighters & other teams, 'rangers' & individuals roaming around, who are only reliably connected via HAM radio or other non-data supporting means. Teams or individuals can radio in their locations - in a variety of formats, and be centrally tracked. A single log of reports, locations, events and time is created for documentation and analysis. Most critically search area coverage can be determined and teams/individuals that have NOT reported in can be monitored.

This Progressive Web Application, or PWA, will largely run even if there is inconsistent, limited, or no cell, internet or data access at the command post. It runs entirely in a device's browser, allowing operation on most any simple, modern, basic web browser in the field. Rangers can radio in their locations - using a variety of location codes, and be centrally tracked.

Verbally transmitting & transcribing latitude & longitude coordinates can be very error prone and slow. Instead RangerTrak also permits other ways to report locations: by Street Address, Google PlusCodes, and perhaps What3Words. See https://en.wikipedia.org/wiki/Open_Location_Code#Other_geocode_systems for a list.

> Track & map search & rescue members reporting via radio, without reliable cell or internet access

### RangerTrak™ - tooling for ranging Rangers

#### About

Version 0.11.42

RangerTrak™ is an open-source application for tracking & mapping SAR, CERT, ACS, other teams, rangers & individuals roaming around, who are only reliably connected via HAM radio or other non-data supporting means. They can radio in their locations - in a variety of formats, and be centrally tracked.

This should be able to function (with some degradation) even if the person using this is offline.

Items requiring online access:

- GeoCoding an address
- Google maps
- OpenStreetMaps maps (for now)
- 3Word functionality (for now)

An overview of using location codes (instead of lat/long) can be found at:
https://github.com/google/open-location-code/wiki/Evaluation-of-Location-Encoding-Systems

eoc.online provides free tools for Emergency Operations Centers and emergency services.
For more information and to report issues please visit https://github.com/EOCOnline/RangerTrak.

#### Technologies

- Progressive Web App (PWA): After the initial load, installable & runs w/o Internet
- Angular 14 with TypeScript and Material Design
- Evergreen: runs latest stable packages
- Leaflet Maps with clustering + overview map + offline caching
- Angular Google Maps with clustering + overview map
- Observables and Observers
- Custom Angular Components, such as time picker, location widget
- Reactive Angular Forms
- Various geocode technologies: Google PlusCodes, What3Words, coordinate conversion
- Ag-grid based tables with searching, sorting, filtering, etc.
- No cookies, only uses LocalStorage
- Cross platform: Runs on any modern browser, using only standard HTML 5 & CSS 3

FUTURE:

- Data passed to servers (when internet connectivity allows) for remote display of data & maps

©2022 eoc.online, under the MIT License

### Screenshots

#### Entry Screen

![RangerTrak screenshot](images/rangertrak/entry.png)

#### Google Map Screen

![RangerTrak screenshot](images/rangertrak/googlemaps.png)

#### Leaflet Map Screen

![RangerTrak screenshot](images/rangertrak/LeafletMaps.png)

#### Field Reports Screen

![RangerTrak screenshot](images/rangertrak/fieldreports.png)

#### Rangers & Teams Screen

![RangerTrak screenshot](images/rangertrak/rangers.png)

#### Mission Settings Screen

![RangerTrak screenshot](images/rangertrak/missionsettings.png)

#### About Screen

![RangerTrak screenshot](images/rangertrak/about.png)

#### Event Summary Log Screen

![RangerTrak screenshot](images/rangertrak/log.png)
