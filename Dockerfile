# INSTALL MRIDEVTEAM NASA NODE4 BASE IMAGE  (FROM NODE:4 + WP ENV setup)
FROM nodesource/wheezy:4.4.0

# ADD the SRC
ADD . /src

# SET WORKING DIRECTORY
WORKDIR /src

# NPM INSTALL Directory
RUN npm install


CMD node index.js
