# Seasonal Collections

The `seasonal` Default Collection File is used to dynamically create seasonal collections based on holidays .

![](../images/seasonal.png)

## Requirements & Recommendations

Supported Library Types: Movie

## Collections Section 000

| Collection                                    | Key             | Description                                                                    |
|:----------------------------------------------|:----------------|:-------------------------------------------------------------------------------|
| `Seasonal Collections`                        | `separator`     | [Separator Collection](../separators.md) to denote the Section of Collections. |
| `🎊 New Year's Day Movies`                    | `years`         | Collection of Movies related to New Year's Day.                                |
| `💘 Valentine's Day Movies`                   | `valentine`     | Collection of Movies related to Valentine's Day.                               |
| `☘ St. Patrick's Day Movies`                  | `patrick`       | Collection of Movies related to St. Patrick's Day.                             |
| `🐰 Easter Movies`                            | `easter`        | Collection of Movies related to Easter.                                        |
| `🤱 Mother's Day Movies`                      | `mother`        | Collection of Movies related to Mother's Day.                                  |
| `🪖 Memorial Day Movies`                      | `memorial`      | Collection of Movies related to Memorial Day.                                  |
| `👨 Father's Day Movies`                      | `father`        | Collection of Movies related to Father's Day.                                  |
| `🎆 Independence Day Movies`                  | `independence`  | Collection of Movies related to Independence Day.                              |
| `⚒ Labor Day Movies`                          | `labor`         | Collection of Movies related to Labor Day.                                     |
| `🎃 Halloween Movies`                         | `halloween`     | Collection of Movies related to Halloween.                                     |
| `🎖 Veteran's Day Movies`                     | `veteran`       | Collection of Movies related to Veteran's Day.                                 |
| `🦃 Thanksgiving Movies`                      | `thanksgiving`  | Collection of Movies related to Thanksgiving.                                  |
| `🎅 Christmas Movies`                         | `christmas`     | Collection of Movies related to Christmas.                                     |
| `🌊🌺 Asian American Pacific Islander Movies` | `aapi`          | Collection of Movies related to Asian American Pacific Islander Month          |
| `♿ Disability Month Movies`                   | `disabilities`  | Collection of Movies related to Disability Month                               |
| `✊ 🏿 Black History Month Movies`             | `black_history` | Collection of Movies related to Black History Month                            | 
| `🏳️‍🌈 LGBTQ Month Movies`                   | `lgbtq`         | Collection of Movies related to LGBTQ Month                                    | 
| `🪅 National Hispanic Heritage Movies`        | `latinx`        | Collection of Movies related to National Hispanic Heritage Month               |
| `🚺 Women's History Month Movies`             | `women`         | Collection of Movies related to Women's History Month                          |

## Config

The below YAML in your config.yml will create the collections:

```yaml
libraries:
  Movies:
    collection_files:
      - pmm: seasonal
```

## Template Variables

Template Variables can be used to manipulate the file in various ways to slightly change how it works without having to make your own local copy.

Note that the `template_variables:` section only needs to be used if you do want to actually change how the defaults work. Any value not specified will use its default value if it has one if not it's just ignored.

??? info "Click to expand"

    === "File-Specific Template Variables"

        The below template variables are available specifically for this PMM Defaults file.

        Be sure to also check out the "Shared Template Variables" tab for additional variables.

        This file contains a [Separator](../separators.md) so all [Shared Separator Variables](../separators.md#shared-separator-variables) are available as well.

        | Variable                              | Description & Values                                                                                                                                                                                                                                                                               |
        |:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
        | `tmdb_collection_<<key>>`<sup>1</sup> | **Description:** Adds the TMDb Collection IDs given to the specified key's collection. Overrides the [default tmdb_collection](#default-tmdb_collection) for that collection if used.<br>**Values:** List of TMDb Collection IDs                                                                   |
        | `tmdb_movie_<<key>>`<sup>1</sup>      | **Description:** Adds the TMDb Movie IDs given to the specified key's collection. Overrides the [default tmdb_movie](#default-tmdb_movie) for that collection if used.<br>**Values:** List of TMDb Movie IDs                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | `imdb_list_<<key>>`<sup>1</sup>       | **Description:** Adds the Movies in the IMDb List to the specified key's collection. Overrides the [default imdb_list](#default-imdb_list) for that collection if used.<br>**Values:** List of IMDb List URLs                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
        | `trakt_list_<<key>>`<sup>1</sup>      | **Description:** Adds the Movies in the Trakt List to the specified key's collection.<br>**Values:** List of Trakt List URLs                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | `mdblist_list_<<key>>`<sup>1</sup>    | **Description:** Adds the Movies in the MDb List to the specified key's collection.<br>**Values:** List of MDbList URLs                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | `emoji`                               | **Description:** Controls the Emoji Prefix for all Collections. Set to `""` to remove all emojis.<br>**Values:** Any String                                                                                                                                                                        |
        | `emoji_<<key>>`<sup>1</sup>           | **Description:** Controls the Emoji Prefix for the specified key's collection.<br>**Values:** Any String                                                                                                                                                                                           |
        | `limit`                               | **Description:** Changes the Builder Limit for all collections in this file.<br>**Values:** Number Greater than 0                                                                                                                                                                                  |
        | `limit_<<key>>`<sup>1</sup>           | **Description:** Changes the Builder Limit of the specified key's collection.<br>**Default:** `limit`<br>**Values:** Number Greater than 0                                                                                                                                                         |
        | `sync_mode`                           | **Description:** Changes the Sync Mode for all collections in a Defaults file.<br>**Default:** `sync`<br>**Values:**<table class="clearTable"><tr><td>`sync`</td><td>Add and Remove Items based on Builders</td></tr><tr><td>`append`</td><td>Only Add Items based on Builders</td></tr></table>   |
        | `sync_mode_<<key>>`<sup>1</sup>       | **Description:** Changes the Sync Mode of the specified key's collection.<br>**Default:** `sync_mode`<br>**Values:**<table class="clearTable"><tr><td>`sync`</td><td>Add and Remove Items based on Builders</td></tr><tr><td>`append`</td><td>Only Add Items based on Builders</td></tr></table>   |
        | `sort_by`                             | **Description:** Changes the Smart Filter Sort for all collections in this file.<br>**Default:** `release.desc`<br>**Values:** [Any `smart_filter` Sort Option](../../files/builders/smart.md#sort-options)                                                                                              |
        | `sort_by_<<key>>`<sup>1</sup>         | **Description:** Changes the Smart Filter Sort of the specified key's collection.<br>**Default:** `sort_by`<br>**Values:** [Any `smart_filter` Sort Option](../../files/builders/smart.md#sort-options)                                                                                                  |
        | `schedule`                            | **Description:** Changes the Schedule for all collections in this file. Use `daily` to have all collections show.<br>**Values:** [Any Schedule Option](../../config/schedule.md)                                                                                                         |
        | `schedule_<<key>>`<sup>1</sup>        | **Description:** Changes the Schedule of the specified key's collection. Overrides the [default schedule](#default-schedule) for that collection if used.<br>**Values:** [Any Schedule Option](../../config/schedule.md)                                                                 |
        | `data`                                | **Description:** Overrides the [default data dictionary](#default-data). Defines the data that the custom dynamic collection processes.<br>**Values:** Dictionary List of keys/names                                                                                                               |
        | `append_data`                         | **Description:** Appends to the [default data dictionary](#default-data).<br>**Values:** Dictionary List of keys/names                                                                                                                                                                             |
        | `exclude`                             | **Description:** Exclude these Seasons from creating a Dynamic Collection.<br>**Values:** List of Seasons Keys                                                                                                                                                                                     |
        | `name_format`                         | **Description:** Changes the title format of the Dynamic Collections.<br>**Default:** `<<key_name>> <<library_translationU>>s`<br>**Values:** Any string with `<<key_name>>` in it.                                                                                                                |
        | `summary_format`                      | **Description:** Changes the summary format of the Dynamic Collections.<br>**Default:** `A collection of <<key_name>> <<library_translation>>s that may relate to the season.`<br>**Values:** Any string.                                                                                          |

        1. Each default collection has a `key` that when calling to effect a specific collection you must replace `<<key>>` with when calling.

    === "Shared Template Variables"

        {%
          include-markdown "../collection_variables.md"
        %}

    ### Example Template Variable Amendments

    The below is an example config.yml extract with some Template Variables added in to change how the file works.

    ???+ tip

        Anywhere you see this icon:
      
        > :fontawesome-solid-circle-plus:
      
        That's a tooltip, you can press them to get more information.

    ```yaml
    libraries:
      Movies:
        collection_files:
          - pmm: seasonal
            template_variables:
              use_independence: false #(1)!
              schedule_thanksgiving: range(10/01-10/30) #(2)!
              sort_by: random #(3)!
              append_data:
                apes: Planet of the Apes Day #(4)!
              schedule_apes: range(11/24-11/26) #(5)!
              imdb_list_apes: https://www.imdb.com/list/ls005126084/ #(6)!
              emoji_veteran: "🐵 " #(7)!
    ```

    1.  Do not create the "Independence Day" collection
    2.  Set a custom schedule for the Thanksgiving Day collection
    3.  Sort the collections created by this file in random order
    4.  Create a new Seasonal collection called "Planet of the Apes Day", and set the key for this collection to `apes`
    5.  Set a scheduled range for the "Planet of the Apes Day" collection.  Planet Of The Apes Day is 11/25.
    6.  Add an IMDb List to be used for the "Planet of the Apes Day" collection
    7.  Add the 🐵 emoji to the "Planet of the Apes Day" collection so that the title in Plex is "🐵 Planet of the Apes Day Movies"

## Default Values

??? tip

    These are lists provided for reference to show what values will be in use if you do no customization.  **These do not show how to change a name or a list.**

    If you want to customize these values, use the methods described above.

    **Default `data`**:

    ```yaml
    data:
      years: New Year's Day
      valentine: Valentine's Day
      patrick: St. Patrick's Day
      easter: Easter
      mother: Mother's Day
      memorial: Memorial Day
      father: Father's Day
      independence: Independence Day
      labor: Labor Day
      halloween: Halloween
      veteran: Veteran's Day
      thanksgiving: Thanksgiving
      christmas: Christmas
      aapi: Asian American & Pacific Islander Heritage Month
      disabilities: Day of Persons with Disabilities
      black_history: Black History Month
      lgbtq: LGBTQ+ Pride Month
      latinx: Latinx Heritage Month
      women: Women's History Month
    ```

    **Default `tmdb_collection`**:

    ```yaml
    tmdb_collection:
      halloween:
        - 185103    # Hotel Transylvania
        - 11716     # Addams Family
        - 750822    # Addams Family Animated
        - 313086    # Conjuring
        - 91361     # Halloween Collection
        - 8581      # A Nightmare on Elm Street Collection
        - 1733      # The Mummy Collection
        - 8091      # Alien Collection
        - 2980      # Ghostbusters
        - 751156    # Hocus Pocus
    ```

    **Default `tmdb_movie`**:

    ```yaml
    tmdb_movie:
      halloween:
        - 23437    # A Nightmare on Elm Street (2010)
    ```

    **Default `imdb_list`**:

    ```yaml
    imdb_list:
      years: https://www.imdb.com/list/ls066838460/
      valentine:
        - https://www.imdb.com/list/ls000094398/
        - https://www.imdb.com/list/ls057783436/
        - https://www.imdb.com/list/ls064427905/
      patrick: https://www.imdb.com/list/ls063934595/
      easter:
        - https://www.imdb.com/list/ls062665509/
        - https://www.imdb.com/list/ls051733651/
      mother: https://www.imdb.com/list/ls072551197/
      memorial: https://www.imdb.com/list/ls561621160/
      father: https://www.imdb.com/list/ls020471057/
      independence:
        - https://www.imdb.com/list/ls068664510/
        - https://www.imdb.com/list/ls080925875/
      labor: https://www.imdb.com/list/ls002014923/
      halloween:
        - https://www.imdb.com/list/ls023118929/
        - https://www.imdb.com/list/ls000099714/
      veteran:
        - https://www.imdb.com/list/ls565595526/
      thanksgiving:
        - https://www.imdb.com/list/ls000835734/
        - https://www.imdb.com/list/ls091597850/
      christmas: https://www.imdb.com/list/ls000096828
    ```

    **Default `imdb_search`**:

    ```yaml
      women:
        - keyword.any: women-in-film, womens-rights,womens-suffrage`
    ```

    **Default `mdblist`**:

    ```yaml
    mdblist_list:
      aapi:
        - https://mdblist.com/lists/plexmetamanager/asian-american-pacific-islander-heritage-month
      disabilities:
        - https://mdblist.com/lists/plexmetamanager/day-of-persons-with-disabilities
      lgbtq:
        - https://mdblist.com/lists/plexmetamanager/lgbtq-pride-month
      latinx:
        - https://mdblist.com/lists/plexmetamanager/latinx-heritage-month
    ```

    **Default `trakt_list`**:

    ```yaml
    trakt_list:
      black_history:
        - https://trakt.tv/users/hoochzilla/lists/black-cinema?display=movie&sort=title,asc
        - https://trakt.tv/users/bluephi8/lists/black-history?display=movie&sort=title,asc
    ```

    **Default `schedule`**:

    ```yaml
    schedule:
      years: range(12/26-01/04)
      valentine: range(02/01-02/29)
      patrick: range(03/01-03/18)
      easter: range(03/20-04/30)
      mother: range(05/05-05/10)
      memorial: range(5/18-6/7)
      father: range(06/15-06/20)
      independence: range(06/23-07/11)
      labor: range(09/01-09/10)
      halloween: range(10/01-10/31)
      veteran: range(11/01-11/30)
      thanksgiving: range(11/01-11/30)
      christmas: range(12/01-12/31)
      aapi: range(04/30-05/31)
      disabilities: range(12/02-12/04)
      black_history: range(02/01-03/01)
      lgbtq: range(05/31-06/30)
      latinx: range(09/15-10/15)
      women: range(02/28-03/31)
    ```
