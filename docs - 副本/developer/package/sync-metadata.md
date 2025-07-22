---
sidebar_position: 50
---

# Synchronize Metadata

By using the VS Code plugin, you can synchronize the metadata of visual development with the project source code, achieve version management of metadata, and further utilize DevOps tools for team development and automation.

## Prepare Metadata Synchronize

The following are the necessary configuration operations that need to be performed in the local development environment to use the metadata sync function. These configuration steps can be skipped in our recommended remote development environment because we have already preprocessed these configurations in Gitpod's remote development environment.

### Installing the Steedos Command

Install or update the Steedos CLI command tool. This is required to synchronize metadata between the local environment and the project source code.

```bash
npm i steedos-cli --global
```

### Installing VS Code and Plugins


[Refer to the official documentation to download and install VS Code.](https://code.visualstudio.com/)

Open VS Code, search for "Steedos" in the extension marketplace, select "Steedos Extension Pack," and click "Install" to begin the installation. This extension will automatically install the "Steedos CLI Integration" extension, so there is no need to install the CLI extension separately.

 ![](https://console.steedos.cn/api/files/images/QEtoyPozXdRDbWocP)

### Setup Metadata Server

Setup environment variables required for metadata synchronization.

```bash
steedos source:config
```

- Metadata Server: METADATA_SERVER is the ROOT_URL of the Steedos server you wish to connect to.
- Metadata API Key: METADATA_APIKEY is used to authenticate your identity. 

This command writes environment variables into the .env.local file, 

```bash
METADATA_SERVER=
METADATA_APIKEY=
```

You can also set the above environment variables directly without running the command.

## Synchronize Metadata

### Browse and Rectrive Metadata

After completing the previous configuration, the icon shown in the following figure will appear in the left toolbar of VS Code. Clicking the icon will automatically display a list of downloadable metadata. You only need to click the download icon on the right of the desired file to download it to the local file.

Note that if the file already exists locally, it will be overwritten directly. Therefore, before downloading metadata, existing code should be committed to the git repository first, so that the files modified by this download can be viewed.

 ![](https://console.steedos.cn/api/files/images/8o3JqQDox4Gijxorn)
 
If the environment variables related to metadata synchronization are not configured, clicking on buttons such as refresh and download in the upper right corner will result in the error: "Please run command steedos source:config." To resolve this, you can follow the instructions in the "Configuring Environment Variables" section above to configure the corresponding environment variables, or run the command "steedos source:config" in the project command line to configure the relevant environment variables in the wizard.

### Deploy Metadata

If metadata has been updated by others from the git repository, or if metadata configuration files have been modified directly, the metadata can be uploaded to the Steedos server using the upload command. 

To do so, select the metadata to be uploaded in the project folder, right-click, and select "Steedos: Deploy Source" from the menu.

 ![](https://console.steedos.cn/api/files/images/ju5NqucSwB3H6EtKu)
 
 The Steedos VS Code code synchronization plug-in not only allows you to publish local code to the database through "Deploy Source," but also allows you to synchronize metadata developed through visual development on the interface to code by using the "Retrieve Source" operation to download it locally. For metadata that can be maintained through visual development on the interface, we recommend that developers do not develop locally in VS Code, in order to ensure that the metadata configuration in the system always comes from a single source, which can avoid problems such as duplicate metadata.

### Synchronize specific files or folders

Once the metadata has been synchronized to the local machine, you can navigate to the project folder, select the corresponding metadata file or folder, and upload or download the corresponding metadata.

 ![](https://console.steedos.cn/api/files/images/t8sHRTEsPFr2PL8JZ)

### Set the default synchronization path

It is important to note that by default, the above-mentioned steps will synchronize the code to the default software package directory, "steedos-app". If you want to sync the configured metadata in the UI to a software package directory located in the "steedos-packages" folder, you need to first configure the following environment variables to change the default software package location. Alternatively, you could use the "setDefaultPackagePath" command in the "View" → "Command Palette" menu of the VSCode editor, which automatically creates the relevant environment variables, as mentioned in the "Switching Default Software Packages" section above.

```bash
[package]
DEFAULT_PACKAGE_PATH=steedos-packages/xxx 
```

After configuring this environment variable, you can click on the download button located next to the relevant metadata on the Steedos plugin panel to sync the code to the directory of the "xxx" software package, instead of the default software package directory.

Similarly, after configuring the default software package environment variable mentioned above, you can only perform right-click operations such as "Deploy Source" and "Retrieve Source" on files or folders within the software package directory.
