# Calendar Partial/Widget

## Intro

An activity calendar-widget is well known from content management systems like Wordpress. Users can see the activities/posts written in a calendar view and navigate through the archive. In this article, I show you one possible approach to achieve this with Hugo.

## Source

https://web.archive.org/web/20191212005200/https://gohugohq.com/partials/activity-calendar-posts/

## Usage & Parameters

**Usage:** {{ partial "calendar" (dict "context" . "from" 2016 "fromMonth" 10 "to" (now.Format "2006") "toMonth" (now.Format "1") "pages" .Site.Pages) }}

### Parameters

**context**
This is crucial to pass the current context into the partial. While partials have an own context otherwise without access to the related parent context.

**from**
This is the year as (YYYY) when you want to start the calendar.

**fromMonth**
This is the month as a single digit number without leading zero in which month the calendar needs to start (including this month).

**to**
This is the year as (YYYY) when you want to end the calendar.

**toMonth**
This is the month as a single digit number without leading zero in which month the calendar needs to stop (including this month).

**pages**
Pages expect a list of pages to check whether or not there was a post in a certain year/month/day. This will also provide a bunch of flexibility and multi usage of the partial.

(If you are wondering what (now.Format "2006") makes - have a look at the explanation of dateFormat in Hugo.)

## Taxonomy structure

In order to make working links to the archive we need to create taxonomies that creates the list-pages for the articles. For this we need changes in the hugo.toml and prepare some layouts for the archive-taxonomy.

**hugo.toml**

```
# adding taxonomy term 'archive'
[taxonomies]
archive = "archive"
```

Then create a layout file called archive.html in /layouts/taxonomy/. To start with the following content:

**archive.html**

```
<h1>Archive! Hooray...</h1>
{{ $currentTaxonomy := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
{{ .Pages | jsonify }}
```

Next choose a page you want to be rendered within the activity calendar-view and add the following front matter:

**your-content.md**

```
+++
date = "2017-03-06T21:27:05.454Z"
PublishDate = "2017-03-06T21:27:05.454Z"
archive = ["2017","2017-03","2017-03-06"]
+++
```

Unclear whether PublishDate is required...

In this example the page will be rendered in the archive of the Year 2017, the month of March and within the specific day’s archive at the 6th of March, 2017.
