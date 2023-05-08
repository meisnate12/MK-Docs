## Collections

These files can generally be used on both Movie and Show library-types, or are part of a category of collection (such as Award Shows.)

These collections are applied by calling the below paths into the `metadata_path` section of your config.yml

### Award Collections

| Default                                                    | Path              | Example Collections                         |  Works with Movies   |  Works with Shows   |
|:-----------------------------------------------------------|:------------------|:--------------------------------------------|:--------------------:|:-------------------:|
| [Award Separator](../award/separator)                         | `separator_award` | Award Collections                           |       :fontawesome-solid-circle-check:{ .green }        |       :fontawesome-solid-circle-check:{ .green }       |
| [British Academy of Film and Television Arts](../award/bafta) | `bafta`           | BAFTA Best Films, BAFTA 2021                | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  |      :fontawesome-solid-circle-check:{ .grey }       |
| [Cannes](../award/cannes)                                     | `cannes`          | Cannes - Palme d'or, Cannes 2018            | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  |      :fontawesome-solid-circle-check:{ .grey }       |
| [Critics Choice](../award/choice)                             | `choice`          | Critics Choice Awards 2020                  | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  | :fontawesome-solid-circle-check:{ .green }<sup>1</sup> |
| [Emmys](../award/emmy)                                        | `emmy`            | Emmys 2021                                  |       :fontawesome-solid-circle-check:{ .green }        |       :fontawesome-solid-circle-check:{ .green }       |
| [Golden Globes](../award/golden)                              | `golden`          | Best Motion Pictures                        |       :fontawesome-solid-circle-check:{ .green }        |       :fontawesome-solid-circle-check:{ .green }       |
| [Academy Awards (Oscars)](../award/oscars)                    | `oscars`          | Best Picture Winners                        |       :fontawesome-solid-circle-check:{ .green }        |      :fontawesome-solid-circle-check:{ .grey }       |
| [Independent Spirit](../award/spirit)                         | `spirit`          | Independent Spirit Awards 2021              | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  |      :fontawesome-solid-circle-check:{ .grey }       |
| [Sundance](../award/sundance)                                 | `sundance`        | Sundance Grand Jury Winners                 | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  |      :fontawesome-solid-circle-check:{ .grey }       |
| [Other](../award/other)                                       | `other_award`     | Berlinale Golden Bears, Venice Golden Lions | :fontawesome-solid-circle-check:{ .green }<sup>1</sup>  |      :fontawesome-solid-circle-check:{ .grey }       |

<sup>1</sup> Requires [Trakt Authentication](../config/trakt)

### Chart Collections

| Default                            | Path              | Example Collections                        |  Works with Movies  |  Works with Shows   |
|:-----------------------------------|:------------------|:-------------------------------------------|:-------------------:|:-------------------:|
| [Chart Separator](../chart/separator) | `separator_chart` | Chart Collections                          |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [AniList](../chart/anilist)           | `anilist`         | AniList Popular, AniList Season            |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [Basic](../chart/basic)               | `basic`           | Newly Released, New Episodes               |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [FlixPatrol](../chart/flixpatrol)     | `flixpatrol`      | Top Disney, Top Max, Top Hulu, Top Netflix |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [IMDb](../chart/imdb)                 | `imdb`            | IMDb Popular, IMDb Top 250                 |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [MyAnimeList](../chart/myanimelist)   | `myanimelist`     | MyAnimeList Popular, MyAnimeList Top Rated |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [Other](../chart/other)               | `other_chart`     | AniDB Popular, Common Sense Selection      |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [Tautulli](../chart/tautulli)         | `tautulli`        | Plex Popular, Plex Watched                 | :fontawesome-solid-circle-check:{ .green }<sup>2</sup> | :fontawesome-solid-circle-check:{ .green }<sup>2</sup> |
| [TMDb](../chart/tmdb)                 | `tmdb`            | TMDb Popular, TMDb Airing Today            |       :fontawesome-solid-circle-check:{ .green }       |       :fontawesome-solid-circle-check:{ .green }       |
| [Trakt](../chart/trakt)               | `trakt`           | Trakt Popular, Trakt Trending              | :fontawesome-solid-circle-check:{ .green }<sup>1</sup> | :fontawesome-solid-circle-check:{ .green }<sup>1</sup> |

<sup>1</sup> Requires [Trakt Authentication](../config/trakt)
<sup>2</sup> Requires [Tautulli Authentication](../config/tautulli)

### General Collections

| Default                                                                                   | Path                 | Example Collections                                     |                Works with Movies                 |               Works with Shows                |
|:------------------------------------------------------------------------------------------|:---------------------|:--------------------------------------------------------|:------------------------------------------------:|:---------------------------------------------:|
| [Actor](../both/actor)                                                                    | `actor`              | Chris Hemsworth, Margot Robbie                          | :fontawesome-solid-circle-check:{ .green }       | :fontawesome-solid-circle-check:{ .green }    |
| [Audio Language](../both/audio_language)                                                  | `audio_language`     | French Audio, Korean Audio                              |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Based On...](../both/based)                                                              | `based`              | Based on a Book, Based on a True Story                  |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Collectionless](../both/collectionless)                                                  | `collectionless`     | Collectionless                                          |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Common Sense Content Rating](../both/content_rating_cs)                                  | `content_rating_cs`  | 1, 2, 3, 4, 5, 6, 15, 16, 17, 18                        |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [MyAnimeList Content Rating](../both/content_rating_mal)                                  | `content_rating_mal` | G, PG, PG-13, R, R+, Rx                                 |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Content Rating (UK)](../both/content_rating_uk)                                          | `content_rating_uk`  | U, PG, 12A                                              |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| Content Rating (US) [Movie](../movie/content_rating_us)/[Show](../show/content_rating_us) | `content_rating_us`  | G, PG, NC-17                                            |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| Country [Movie](../movie/country)/[Show](../show/country)                                 | `country`            | Belgium, India                                          |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| Decade [Movie](../movie/decade)/[Show](../show/decade)                                    | `decade`             | Best of 2012, Best of 2022                              |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Director](../movie/director)                                                             | `director`           | Steven Spielberg (Director), Olivia Wilde (Director)    |    :fontawesome-solid-circle-check:{ .green }    |   :fontawesome-solid-circle-check:{ .grey }   |
| Franchise [Movie](../movie/franchise)/[Show](../show/franchise)                           | `franchise`          | Star Wars: Skywalker Saga, Godzilla (Anime)             |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Genre](../both/genre)                                                                    | `genre`              | Action, Drama, Science Fiction                          |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Network](../show/network)                                                                | `network`            | Disney Channel, Lifetime                                |    :fontawesome-solid-circle-check:{ .grey }     |  :fontawesome-solid-circle-check:{ .green }   |
| [Producer](../movie/producer)                                                             | `producer`           | James Cameron (Producer), Reese Witherspoon (Producer)  |    :fontawesome-solid-circle-check:{ .green }    |   :fontawesome-solid-circle-check:{ .grey }   |
| [Resolution](../both/resolution)                                                          | `resolution`         | 4K Movies, 1080p Movies, 720p Movies                    |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Seasonal](../movie/seasonal)                                                             | `seasonal`           | Easter, Christmas                                       |    :fontawesome-solid-circle-check:{ .green }    |   :fontawesome-solid-circle-check:{ .grey }   |
| [Streaming](../both/streaming)                                                            | `streaming`          | Disney+ Movies, Max Shows                               |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Studio](../both/studio)                                                                  | `studio`             | DreamWorks Studios, Walt Disney Pictures                |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Anime Studio](../both/studio_anime)                                                      | `studio_anime`       | Bones, Studio Ghibli, Toei Animation                    |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Subtitle Language](../both/subtitle_language)                                            | `subtitle_language`  | German Subtitles, Swedish Subtitles                     |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Universe](../both/universe)                                                              | `universe`           | Marvel Cinematic Universal, Wizarding World             |    :fontawesome-solid-circle-check:{ .green }    |   :fontawesome-solid-circle-check:{ .grey }   |
| [Year](../both/year)                                                                      | `year`               | Best of 2010, Best of 2019                              |    :fontawesome-solid-circle-check:{ .green }    |  :fontawesome-solid-circle-check:{ .green }   |
| [Writer](../movie/writer)                                                                 | `writer`             | James Cameron (Writer), Lilly Wachowski (Writer)        |    :fontawesome-solid-circle-check:{ .green }    |   :fontawesome-solid-circle-check:{ .grey }   |