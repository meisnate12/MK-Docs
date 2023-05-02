# Config File

Plex Meta Manager uses a YAML configuration file; this file contains settings that determine how Plex Meta Manager behaves, and the required connection details needed to connect to Plex Media Server, Radarr, Sonarr, and other third-party services via API.

By default, and unless otherwise stated, Plex Meta Manager looks for the configuration file at `/config/config.yml`.

A template Configuration File can be found in the [GitHub Repo](https://github.com/meisnate12/Plex-Meta-Manager/blob/master/config/config.yml.template).

This table outlines the third-party services that Plex Meta Manager can make use of. Each service has specific requirements for setup that can be found by clicking the links within the table.

| Attribute                     | Required                                |
|:------------------------------|:----------------------------------------|
| [`libraries`](libraries)      | :fontawesome-solid-circle-check:{ .green }                                 |
| [`playlist_files`](playlists) | :fontawesome-solid-circle-check:{ .grey }                                |
| [`settings`](settings)        | :fontawesome-solid-circle-check:{ .grey }                                |
| [`webhooks`](webhooks)        | :fontawesome-solid-circle-check:{ .grey }                                |
| [`plex`](plex)                | :fontawesome-solid-circle-check:{ .green } Either here or per library |
| [`tmdb`](tmdb)                | :fontawesome-solid-circle-check:{ .green }                                 |
| [`tautulli`](tautulli)        | :fontawesome-solid-circle-check:{ .grey }                                |
| [`omdb`](omdb)                | :fontawesome-solid-circle-check:{ .grey }                                |
| [`notifiarr`](notifiarr)      | :fontawesome-solid-circle-check:{ .grey }                                |
| [`anidb`](anidb)              | :fontawesome-solid-circle-check:{ .grey }                                |
| [`radarr`](radarr)            | :fontawesome-solid-circle-check:{ .grey }                                |
| [`sonarr`](sonarr)            | :fontawesome-solid-circle-check:{ .grey }                                |
| [`trakt`](trakt)              | :fontawesome-solid-circle-check:{ .grey }                                |
| [`mal`](myanimelist)          | :fontawesome-solid-circle-check:{ .grey }                                |

## Configuration File Example

This example outlines what a "standard" config.yml file might look like when in use.

~~~yaml
{% include "config.yml.template" %}
~~~
