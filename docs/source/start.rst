:orphan:

Getting Started
*****************


Wyliodrin STUDIO is avalable in two versions: an offline or downloadable one and a web version.

|

Download the application
""""""""""""""""""""""""""

For **Windows** users:

`Wyliodrin STUDIO beta_Windows 64 bit <https://wyliodrin-studio.s3.us-east-2.amazonaws.com/Wyliodrin+STUDIO+Setup+2.0.6-beta.exe>`_

|

For **Linux** users:

`Wyliodrin STUDIO beta_Linux 64 bit <https://wyliodrin-studio.s3.us-east-2.amazonaws.com/Wyliodrin+STUDIO+2.0.6-beta.AppImage>`_

|

For **Mac OS** users:

`Wyliodrin STUDIO beta_macOS <https://wyliodrin-studio.s3.us-east-2.amazonaws.com/Wyliodrin+STUDIO-2.0.6-beta.dmg>`_

|

Use the web version
""""""""""""""""""""""

You also have the possibility to run and use a browser version of Wyliodrin Studio, by copying the following link into your browser address bar:

**beta.wyliodrin.studio**

|

Build from source
""""""""""""""""""""

If you wish to contribute to the improvement of the application or if you want to add your own features or plugins, our code is *open source*, which means you can clone it from our Github.

To download the source code, you must have a GitHub account. Open a terminal, choose the folder where you want to clone our repository and run the following command:

.. code-block:: bash

	git clone https://github.com/wyliodrinstudio/WyliodrinSTUDIO

|

There are 2 methods to build and run the application:

To build the **STANDALONE** version, you will have to run the following commands: 

::

	npm install
	npx electron-rebuild
	npx webpack
	npm run electron

To run the **STANDALONE** version , you will have to run the following command:
::

	npm start

To build **BROWSER** version, you will have to delete the *build* folder, run: 

::
	
	npm install
	npx webpack --config=webpack.browser.config.js
	cd build
	npm install
	
To run the **BROWSER** version , you will have to run the following command:
::

	npm start

|


Once the application was installed and built, you can make changes on our source code, in order to improve it.

|
