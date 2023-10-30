# Config File

Plex Meta Manager uses a YAML configuration file; this file contains settings that determine how Plex Meta Manager behaves, and the required connection details needed to connect to Plex Media Server, Radarr, Sonarr, and other third-party services via API.

By default, and unless otherwise stated, Plex Meta Manager looks for the configuration file at `/config/config.yml`.

A template Configuration File can be found in the [GitHub Repo](https://github.com/meisnate12/Plex-Meta-Manager/blob/master/config/config.yml.template).

This table outlines the third-party services that Plex Meta Manager can make use of. Each service has specific requirements for setup that can be found by clicking the links within the table.

| Attribute                     | Required                                                              |
|:------------------------------|:----------------------------------------------------------------------|
| [`libraries`](libraries.md)   | :fontawesome-solid-circle-check:{ .green }                            |
| [`playlist_files`](playlists.md) | :fontawesome-solid-circle-check:{ .grey }                             |
| [`settings`](settings.md)        | :fontawesome-solid-circle-check:{ .grey }                             |
| [`webhooks`](webhooks.md)        | :fontawesome-solid-circle-check:{ .grey }                             |
| [`plex`](plex.md)                | :fontawesome-solid-circle-check:{ .green } Either here or per library |
| [`tmdb`](tmdb.md)                | :fontawesome-solid-circle-check:{ .green }                            |
| [`github`](github.md)            | :fontawesome-solid-circle-check:{ .grey }                             |
| [`tautulli`](tautulli.md)        | :fontawesome-solid-circle-check:{ .grey }                             |
| [`omdb`](omdb.md)                | :fontawesome-solid-circle-check:{ .grey }                             |
| [`notifiarr`](notifiarr.md)      | :fontawesome-solid-circle-check:{ .grey }                             |
| [`anidb`](anidb.md)              | :fontawesome-solid-circle-check:{ .grey }                             |
| [`radarr`](radarr.md)            | :fontawesome-solid-circle-check:{ .grey }                             |
| [`sonarr`](sonarr.md)            | :fontawesome-solid-circle-check:{ .grey }                             |
| [`trakt`](trakt.md)              | :fontawesome-solid-circle-check:{ .grey }                             |
| [`mal`](myanimelist.md)          | :fontawesome-solid-circle-check:{ .grey }                             |

## Configuration File Example

This example outlines what a "standard" config.yml file might look like when in use.