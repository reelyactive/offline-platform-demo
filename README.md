offline-platform-demo
=====================

The full reelyActive open source platform _without_ dependency on Internet connectivity.  Combines our [hlc-server](https://github.com/reelyactive/hlc-server) with a local copy of [Sniffypedia](https://sniffypedia.org) for full-featured standalone demos that actually work:
- at conferences with unreliable WiFi connectivity
- during flight on commercial aircraft (when permitted)
- deep in the Canadian boreal forest (it's plausiBLE that one could be tracking [barnowls](https://github.com/reelyactive/barnowl#barnowl), [beavers](https://github.com/reelyactive/beaver#beaver) and [chickadees](https://github.com/reelyactive/chickadee#chickadee)...)


Installation (with git)
-----------------------

Installion with git is easy.  Without git, see our tutorial.

From the command line, browse to the folder in which you intend to copy the code, then run:

    git clone --recursive https://github.com/reelyactive/offline-platform-demo
    cd offline-platform-demo
    npm install


Running the offline-platform-demo
---------------------------------

From the command line, from the offline-platform-demo folder, run:

    node server

Then browse to [localhost:3001](http://localhost:3001)


License
-------

MIT License

Copyright (c) 2017 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.



