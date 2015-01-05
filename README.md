certifigate
===========

The first goal of this project is to allow users to use their mobile phone as a password vault. The phone is really
only the master of keys and the passwords are stored in encrypted form on the server.

The second goal of this project is to build a PKI for everyone. So that everyone can communicate securely for free and
easily.

This project has 3 parts

1. a mobile app that holds a public and private key pair and serves to authorize the use of passwords in applications
 and web servers
1. a browser plugin which communicates with the mobile app in order to get passwords and generate new ones
1. a server which does not hold any encryption keys and serves as gateway between clients


