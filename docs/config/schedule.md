# Scheduling Parts of PMM

Plex Meta Manager allows you to schedule libraries, files, overlays, operations, and more so that runs can be tailored to suit your needs.

This is particularly handy for users who have a lot of libraries or run a lot of Metadata/Operations on their libraries.

### IMPORTANT:

These schedules do not trigger PMM to run; they control what PMM will do if it happens to be running at the scheduled time.  `weekly(sunday)`, for example, does not mean "run PMM on Sunday to do this thing"; it means "If PMM is running, and it's Sunday, do this thing".

The scheduling options are:

| Name         | Description                                                                                                         | Format                                             | Example                                                              |
|:-------------|:--------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|:---------------------------------------------------------------------|
| Hourly       | Update only when the script is run in that hour or hour range                                                       | hourly(Hour of Day)<br>hourly(Start Hour-End Hour) | `hourly(17)`<br>`hourly(17-04)`                                      |
| Daily        | Update once a day                                                                                                   | daily                                              | `daily`                                                              |
| Weekly       | Update once a week on the specified days (For multiple days, use a bar-separated (<code>&#124;</code>) list)        | weekly(Days of Week)                               | `weekly(sunday)`<br><code>weekly(sunday&#124;tuesday)</code>         |
| Monthly      | Update once a month on the specified day                                                                            | monthly(Day of Month)                              | `monthly(1)`                                                         |
| Yearly       | Update once a year on the specified day                                                                             | yearly(MM/DD)                                      | `yearly(01/30)`                                                      |
| Range        | Updates whenever the date is within the range (For multiple ranges, use a bar-separated (<code>&#124;</code>) list) | range(MM/DD-MM/DD)                                 | `range(12/01-12/31)`<br><code>range(8/01-8/15&#124;9/01-9/15)</code> |
| Never        | Never updates                                                                                                       | never                                              | `never`                                                              |
| Non Existing | Updates if it doesn't exist                                                                                         | non_existing                                       | `non_existing`                                                       |
| All          | Requires that all comma separated scheduling options inside its brackets be meet in order to run                    | all[Options]                                       | `all[weekly(sunday), hourly(17)]`                                    |

* `daily` is the default when `schedule` is not specified.
* You can run the script multiple times per day but using the `--time` command line argument detailed on the [Run Commands & Environmental Variables Page](../pmm/environmental.md).
* You can have multiple scheduling options as a list.
* You can use the `delete_not_scheduled` setting to delete Collections that are skipped due to not being scheduled.

## Examples

??? blank "Scheduling a Library"
    
    Uses the `schedule` [Library Attribute](libraries.md#Attributes) to set when a library will be run.

    Other schedule rules for files, overlays, collections, and any other attribute that can be scheduled must also be met.

    ???+ "Example"

        Below is an example of a library which has been scheduled to run every Sunday. 
       
        ```yaml
        libraries:
          Movies:
            schedule: weekly(sunday)
            collection_files:
              - file: config/Movies.yml
              - pmm: imdb
              - pmm: studio
              - pmm: genre
              - pmm: actor
            operations:
              mass_critic_rating_update: tmdb
        ```

??? blank "Scheduling Collection, Playlist, and Metadata Files"
    
    Uses the `schedule` [Block Attribute](files.md#Other-Block-Attributes) to set when a file will be run.

    Other schedule rules for collections and any other attribute that can be scheduled must also be met.

    ???+ "Example"

        Collection Files, Playlist Files, and Metadata Files can all be individually scheduled, as seen below where different files are scheduled to run on each day of the week:
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - file: config/Movies.yml
                schedule: weekly(monday)
              - pmm: imdb
                schedule: weekly(tuesday)
              - folder: config/Movies/
                schedule: weekly(wednesday)
              - pmm: genre
                schedule: weekly(thursday)
              - pmm: actor
                schedule: weekly(friday)
            metadata_files:
              - file: config/metadata.yml
                schedule: weekly(saturday)
        playlist_files:
          - file: config/Playlists.yml
            schedule: weekly(sunday)
        ```

??? blank "Scheduling Overlays"
    
    Uses the `schedule_overlays` [Library Attribute](libraries.md#attributes) to set when overlays will run for a library.

    **Note: Overlay Files cannot be individually Scheduled, all Overlay Files must be scheduled for the same period.**

    ???+ "Example"

        In the Example below overlays will only be run weekly on Saturday.
        
        ```yaml
        libraries:
          Movies:
            schedule_overlays: weekly(saturday)
            overlay_files:
              - pmm: audio_codec
              - pmm: resolution
              - pmm: video_format
        ```

??? blank "Scheduling Individual Collections"
    
    Uses the `schedule` [Definition Setting](../files/settings.md) to set when this collection will run.

    ???+ "Example"

        Below is an example of a collection which has been scheduled to run on a Sunday. In this scenario, if you run PMM on a Monday, this collection will be skipped but any other collections which do not have a scheduled defined will be run.
        
        ```yaml
        collections:
          TMDb Trending Weekly:
            tmdb_trending_weekly: 30
            sync_mode: sync
            schedule: weekly(sunday)
          TMDb Top Rated:
            tmdb_top_rated: 30
            sync_mode: sync
            schedule: 
             - monthly(1)
             - monthly(15)
        ```

??? blank "Scheduling Operation Blocks"
    
    Uses the `schedule` [Definition Setting](../files/settings.md) to set when this collection will run.

    ???+ "Example"

        Whilst it isn't possible to schedule individual Operations, you can create additional placeholder library names and point them to the original library using `library_name`. This can be used to achieve individually scheduled operations, as seen below:
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - file: config/Movies.yml
          Movies Operations (Monday):       # Name doesn't matter
            library_name: Movies            # Must match your library name in Plex
            schedule: weekly(monday)
            operations:
              mass_user_rating_update: imdb
          Movies Operations (Wednesday):       # Name doesn't matter
            library_name: Movies            # Must match your library name in Plex
            schedule: weekly(wednesday)
            operations:
              mass_audience_rating_update: tmdb
          Movies Operations (Friday):       # Name doesn't matter
            library_name: Movies            # Must match your library name in Plex
            schedule: weekly(friday)
            operations:
              mass_critic_rating_update: trakt
        ```

??? blank "Scheduling Pinning Collections" 
    
    Uses the `visible_library`, `visible_home`, or `visible_shared` [Collection Metadata Update](../files/updates.md) to have collections be "pinned" to your home screen while scheduled.

    ???+ "Example"

        In this example, the collection will be pinned to your home screen for the month of December and on January 1st will no longer be pinned (you must run PMM on 1st January for the removal of the pin to happen)
        
        ```yaml
        collections:
          Christmas Movies:
            imdb_list: https://www.imdb.com/list/ls000096828/
            sync_mode: sync
            visible_home: range(12/01-12/31)
        ```
