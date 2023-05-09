Next you’ll set up the config file.  This tells PMM how to connect to Plex and a variety of other services.

Before you do this you’ll need:

* TMDb API key.  They’re free.
* Plex URL and Token

There are a bunch of other services you *can* configure in the config file, but these two are the bare minimum.

### Getting a TMDb API Key

Note that if you already have an API key, you can use that one.  You don’t need another.

1. Go to https://www.themoviedb.org/.  Log into your account [or create one if you don’t have one already], then go to “Settings” under your account menu.
    
2. In the sidebar menu on the left, select “API”.
    
3. Click to generate a new API key under "Request an API Key".  If there is already one there, copy it and go to the next step.
    
4. There will be a form to fill out; the answers are arbitrary.  The URL can be your personal website, or probably even google.com or the like.
    
5. Once you’ve done that there should be an API Key available on this screen.  If you see v3 and v4, you want the v3 key.
    
6. Copy that value, you’ll need it for the config file.

### Getting a Plex URL and Token

The Plex URL is whatever URL you’d use **from this machine** to connect directly to your Plex server [i.e. NOT app.plex.tv].

As with the TMDb API Key, if you already have a Plex Token, you can use that one.

This article will describe how to get a token: [Finding an authentication token](https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/)


