# File Blocks

When using Plex Meta Manager, the structure of each library is made using File Blocks

???+ example "Example Library Structure"

    ```yaml
    libraries:
      Movies:
        collection_files:
          - pmm: imdb
    ```

    In the above example, `collection_files` is the type of File, which tells PMM that the entries that follow will create/update collections and `- pmm:` is the type of Path, which PMM that the file it is looking for is a PMM Defaults file.

    These ideas will be further outlined on this page.

## Files

{%    
  include-markdown "./file_types.md"
%}

## Blocks

Each time a file is called it's going to use what we call a "File Block". Each block must have the file location type and path and can have other attributes to add more control to that file. 

Every file block under the parent attribute begins with a `-`.

???+ example "Example Block"
    This example has 2 blocks each using location type `pmm` with the path being `tmdb` and `imdb` respectively under the parent attribute `collection_files`. 

    ```yaml
    libraries:
      Movies:
        collection_files:   # Parent Attribute
          - pmm: tmdb       # Block 1
          - pmm: imdb       # Block 2
    ```

### Location Types and Paths

There are multiple location types that can be used to call a file. They can either be on the local system, online at an url, part of the [PMM Defaults](../defaults/guide.md), directly from the [PMM User Configs](https://github.com/meisnate12/Plex-Meta-Manager-Configs) repository, or from another [`Custom Repository`](settings.md).

The location types are outlined as follows:

??? blank "`file` - Used to run a local file."

    Used to run a file which is located within the system that PMM is being run from.

    File locations need to be accessible to PMM at those paths; this is typically only something you need to consider when using Docker.
    
    ???+ example "Example"
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - file: config/path/to/file.yml
        ```

??? blank "`folder` - Used to run all local files in a directory."

    Used to run all files located in a directory which is located within the system that PMM is being run from.

    Folder locations need to be accessible to PMM at those paths; this is typically only something you need to consider when using Docker.
    
    ???+ example "Example"
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - folder: config/path/to/folder
        ```

??? blank "`url` - Used to run a file hosted at a URL."

    Used to run a file hosted publicly on the internet and accessible at a URL.

    This needs to point directly to the YAML file. A common error is using a gitHub link that points to the *page displaying the YAML*. In gitHub, for instance, click on the "Raw" button and use *that* link.
    
    ???+ "Example"
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - url: https://example.com/path/to/file.yml
        ```

??? blank "`pmm` - Used to run a built-in [PMM Defaults](../defaults/guide.md) file."

    Used to run a built-in PMM Defaults file. The values you'd enter here are listed in the [default usage guide](../defaults/guide.md).
    
    ???+ "Example"
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - pmm: oscars
        ```

??? blank "`git` - Used to run a file hosted on the [PMM User Configs](https://github.com/meisnate12/Plex-Meta-Manager-Configs) repository."

    Used to run a file hosted on the [PMM User Configs](https://github.com/meisnate12/Plex-Meta-Manager-Configs) repository.

    Note that you enter the bits of the items path relative to the top level of the repo [`meisnate12/People`] and you don't need the `.yml` extension.
    
    ???+ "Example"
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - git: meisnate12/People # this links to https://github.com/meisnate12/Plex-Meta-Manager-Configs/blob/master/meisnate12/People.yml
        ```

??? blank "`repo` - Used to run a file hosted on a custom repository."

    Used to run a file which is hosted on a repo specified by the user with the [`custom_repo`](settings.md#custom-repo) Setting Attribute.

    Note that as with `git` you enter the bits of the items path relative to repo [`meisnate12/People`] and you don't need the `.yml` extension.

    ???+ "Example"
        This is assuming the `custom_repo` setting is `https://github.com/meisnate12/Plex-Meta-Manager-Configs/tree/master/meisnate12`
        
        ```yaml
        libraries:
          Movies:
            collection_files:
              - repo: People
        ```

## Other Block Attributes

You can have some control of the files from inside your Configuration file by using these block attributes.

??? blank "`template_variables` - Used to define [Custom Template Variables](../files/templates.md#template-variables) for a file."

    Passes all given [Template Variables](../files/templates.md#template-variables) to every template in the file.

    **Note: the file has to be properly set up to use the variables.**

    <hr style="margin: 0px;">
    
    **Attribute:** `template_variables`
    
    **Accepted Values:** [Dictionary](../pmm/yaml.md#dictionaries) of values specified by each particular file.

    **Default Value:** `None`

    ???+ "Example"

        ```yaml
        libraries:
          TV Shows:
            collection_files:
              - pmm: genre
                template_variables:
                  schedule_separator: never
                  collection_mode: hide
              - pmm: actor                  # Notice how the `-` starts this block
                template_variables:
                  schedule_separator: never
                  collection_mode: hide
        ```

        In this example there will be two template variables added to every template in the git file pmm: genre.  
        
        `schedule_separator` is set to `never` to not show a separator in this section and `collection_mode` is set to `hide`.
        
        What these variables will do depends on how they're defined in the Collection File.

??? blank "`schedule` - Used to schedule when a file is run."

    Used to schedule when this file is run using the [schedule options](schedule.md).

    <hr style="margin: 0px;">
    
    **Attribute:** `schedule`
    
    **Accepted Values:** Any [schedule option](schedule.md)

    **Default Value:** `daily`

    ???+ "Example"

        ```yaml
        libraries:
          Movies:
            collection_files:
              - file: config/Movies.yml
                schedule: weekly(friday)
              - pmm: actors
                schedule: weekly(saturday)
        playlist_files:
          - file: config/Playlists.yml
            schedule: weekly(sunday)
        ```

??? blank "`asset_directory` - Used to define Asset Directories for a file."

    Specify the directory where assets (posters, backgrounds, etc) are located for this specific file.

    ???+ important 
    
        Assets can be stored anywhere on the host system that PMM has visibility of (i.e. if using docker, the directory must be mounted/visible to the docker container).

    <hr style="margin: 0px;">
    
    **Attribute:** `asset_directory`
    
    **Accepted Values:** Any directory

    **Default Value:** `[Directory containing YAML config]/assets`

    ???+ "Example"

        ```yaml
        libraries:
          Movies:
            collection_files:
              - file: config/Movies.yml
                asset_directory: <path_to_assets>/Movies
              - pmm: actors
                asset_directory: <path_to_assets>/people
            overlay_files:
              - pmm: imdb
        playlist_files:
          - file: config/Playlists.yml
            asset_directory:
              - <path_to_assets>/playlists1
              - <path_to_assets>/playlists2
        ```
