# Translation

We use Angular's built in i18n support in conjunction with [ngx-i18nsupport](https://github.com/martinroob/ngx-i18nsupport) to help automate the updating of our translation files.

We recommend using a tool like [Omnixlf](https://www.omnixlf.com) for the editing of translations.

## Getting started

1. Fork this repository and clone it
1. Create a new branch and check it out  
    ```
    git branch your-branch-name
    git checkout your-branch-name
    git 
    ```
1. Install the node modules via `npm install`
1. To make sure you have the up to date translation files, run `npm run i18n`
1. Edit the translation files found in the `locale` folder, we reccomend a tool like [Omnixlf](https://www.omnixlf.com)
1. Commit your changes and push them 
    ```
    git add *.xlf
    git commit -m "replace this text with a descriptive message"
    git push
    ```
    1. You may need to use `git push --set-upstream origin your-branch-name` if the branch doesn't exist on github yet.
1. Create a pull request


## Adding a new language

You'll need to update two places:

#### Angular.json

Add your new language under `configurations` in the format:  
```json
    "ISOCODE": {
        "aot": true,
        "outputPath": "dist/kauri-wallet/",
        "i18nFile": "src/locale/messages.ISOCODE.xlf",
        "i18nFormat": "xlf",
        "i18nLocale": "ISOCODE"
    }
```  
Replace "ISOCODE" with the ISO code of your langage.

You will also need to add it to `configurations` under `serve`  

```json
    "ISOCODE": {
        "browserTarget": "kauri-wallet:build:ISOCODE"
    },
```

As with the above, replace "ja" with the ISO code of your langage.

#### xliffmerge.json

Add your new language to the `languages` array.  
Your language should be written as it's ISO shortcut e.g. "en", "de", "de-ch".    
```json
"languages": [
            "en",
            "de",
            "ja"
        ],
```

### Generating new translation files

After you've updated the above files, run `npm run i18n` to generate the new file for your added language.

---

Return to the [README](../README.md)