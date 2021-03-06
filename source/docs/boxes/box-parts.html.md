---
title: "Box Parts"
class_name: docs
full_width: true
---

Box Parts are a large collection of languages, components, databases and other tools that you can effortlessly install with a single command from the [command line](/docs/boxes/terminal).

Using Box Parts is really easy. To start off with, open up a Terminal window from the 'Tools->Terminal' menu item.

Then, enter `parts` on the command line, you will see something like this

	usage: parts COMMAND [ARGS...]

	Some useful commands are:
	  parts install PACKAGE...   # Install one or many packages
	  parts uninstall PACKAGE... # Uninstall one or many packages
	  parts purge PACKAGE...     # Uninstall and remove leftover data
	  parts list                 # List all installed packages
	  parts search [SEARCH_TERM] # Search for a package or list all 
	  parts start PACKAGE...     # Start one or many services 
	  parts stop PACKAGE...      # Stop one or many services 
	  parts restart PACKAGE...   # Restart one or many services 
	  parts status [PACKAGE...]  # Show status of one or many services 
	  parts update               # Update Box Parts


##Preinstalled
The are a few of the notable things that come preinstalled on a Codio Box

- NodeJS (use nvm; please [refer to this section](/docs/specifics/node) for information on running NodeJS under nvm)
- Ruby (uses rbenv; please [refer to this section](/docs/specifics/ruby) for information on running Ruby under rbenv)
- Python 2.7.3 (Python 3.0 available as Box Part)
- Git, Mercurial and SVN


##The Box Parts Repository
We are continuously updating Box Parts. Box Parts are all stored in a central repository on GitHub. We update this repository regularly and then add the contents to the 'Base Image' that runs in your box. If you see a Box Part in the central [Box Parts Repository](https://github.com/codio/boxparts/tree/master/lib/autoparts/packages), but don't see it when you type `parts search` then run the following to download the repo on to your Box.

	parts update

Regardless of whether we have added a brand new Box Part or have modified an existing one, you should run `parts update` and then `parts install <partname>` to update your Box Part properly.

##Finding Box Parts
You can get a complete list of available Box Parts with the following command in the Terminal

    parts search
    
If you want to use a few characters to narrow the list down, just enter

    parts search php
    
and all parts whose name or description contains 'php' will be listed.

The following list shows just a few of the Parts we currently offer as standard. 

- **Preinstalled Languages** : NodeJS (with nvm), Ruby (with rbenv), Python 2.7.3, Java
- **Languages** Box Parts : PHP5 (Composer Box Part available), Lua, Free Pascal, R, Go, Scala, Haskell
- **Databases** : MongoDB, MySQL, PostgreSQL, Redis, Memcached
- **Web Servers** : Nginx, Apache2
- **System Utilities** : Ack, Ant, cmake, libmcrypt, Maven, The Silver Searcher
- **Other**  : Composer for PHP, many PHP modules, Image Magick, MeteorJS, PhantomJS, Tig

##Requesting Additional Box Parts
Any Codio users can request that the Codio team add additional Box Parts to the standard repository. Once added, it will become a standard item and available to all users.

Codio subscribers will be given preference when it comes to adding new Box Parts.

To request a new Box Part, [create a new issue here](https://github.com/codio/boxparts/issues?page=1&state=open) and we'll get it dealt with as soon as we can.

##Installing Box Parts
You can install one or more Box Parts as follows

	parts install <partname-1> <partname-2> ... <part-name-n>

You will then see the installation taking place in the Console.

##Starting, Stopping and Restarting Services
Once you have installed a component, you may need to start it as a service.

	parts start <package-name>
	parts restart <package-name>
	parts stop <package-name>

and to request the service status, use

	parts status <package-name>
	parts status (lists the status of services provided by all installed packages)

When you close and restart your project (and therefore the Box), you will need to restart your services on restart. This can be done automatically or manually as [described here](/docs/boxes/startup).

##Parts folder and config files
Box Parts installs things in a special location where you have full access and control

	~/.parts

If you take a look inside that folder, you will find everything you are likely to need. Configuration files, for example, live in

	~/.parts/etc

So to configure Apache, you would edit the `~/.parts/etc/apache2/httpd.conf` file (using Nano/Vim).


##Complete List of Parts Supported
This list may not be complete, so type `parts search` to see what we have currently added

- **ack** (2.12) Ack: A tool like grep, optimized for programmers
- **adminer** (4.0.3) Adminer: a full-featured database management tool written in PHP
- **ant** (1.9.3) Ant: A pure Java build tool, simpler and easier to use than GNU Make
- **apache2** (2.4.7) Apache Web Server: A cross-platform open-source HTTP server for modern operating systems
- **apache2_mod_wsgi** (3.4) Apache 2 WSGI module: an Apache module that provides a WSGI compliant interface for hosting Python based web applications within Apache.
- **apr** (1.5.0) Apache Portable Runtime: Software libraries that provide a predictable and consistent interface to underlying platform-specific implementations
- **apr_util** (1.5.3) Apache Portable Runtime Utilities: Utilities that provide a predictable and consistent interface to underlying platform-specific implementations
- **beanstalkd** (1.9) Beanstalk: A simple, fast work queue.
- **berkeley_db** (6.0.30) Berkeley DB: a software library that provides a high-performance embedded database for key/value data.
- **cabal** (1.18.0.2) Cabal: A system for building and packaging Haskell libraries and programs   
- **cloudfoundry** (v6.0.1) Cloud Foundry: An open CLI for managing cloud services
- **cmake** (2.8.11.2) CMake: A cross-platform, open-source build system
- **composer** (1.0.0-alpha8) Composer: PHP5 Dependency management
- **dart** (1.2.0) Dart is a new platform for scalable web app engineering
- **dropbox** (2.6.27) Dropbox: a cloud synchronization service.
- **elasticsearch** (1.0.0) Elasticsearch: A flexible and powerful open source, distributed, real-time search and analytics engine 
- **erlang** (R16B03-1) Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability.
- **fish** (2.1.0) fish: A friendly interactive shell 
- **freepascal** (2.6.2) Free Pascal: An open source Pascal compiler for Pascal and Object Pascal
- **fsharp** (3.0) F#: a mature, open source, cross-platform, functional-first programming language which empowers users and organizations to tackle complex computing problems with simple, maintainable and robust code.
- **geos** (3.4.2) GEOS: C++ port of the Java Topology Suite (JTS)
- **ghc** (7.6.3) GHC is a state-of-the-art, open source, compiler and interactive environment for the functional language Haskell
- **gitflow** (0.4.1) Gitflow: a collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model.
- **go-lang** (1.2) Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
- **googleappengine** (1.9.0) Google App Engine Python/PHP: A CLI for managing Google App Engine cloud services for Python and PHP
- **grails** (2.3.7) Grails: an Open Source, full stack, web application framework for the JVM.
- **groovy** (2.2.2) Groovy: an agile and dynamic language for the Java Virtual Machine
- **haskell-platform** (2.0.0) Haskell is an advanced purely-functional programming language.
- **heroku-cli** (3.3.0) The Heroku CLI is used to manage Heroku apps from the command line.
- **image_magick** (6.8.8-9) ImageMagick: a software suite to create, edit, compose, or convert bitmap images.
- **leiningen** (2.3.2) Leiningen: A build automation and dependency management tool for Clojure
- **libmcrypt** (2.5.8) Libmcrypt: A uniform interface to several symmetric encryption algorithms
- **libtool** (2.4.2) libtool: a generic library support script that hides the complexity of using shared libraries behind a consistent, portable interface. 
- **lua** (5.2.2) Lua: A powerful, fast, lightweight, embeddable scripting language
- **mariadb** (5.5.36) MariaDB: An enhanced, drop-in replacement for MySQL.
- **maven** (3.2.1) Maven: A software project management and comprehension tool
- **memcached** (1.4.15) Memcached: An open-source, high-performance memory object caching system 
- **meteor** (0.7.1.2) Meteor: A real-time web development platform
- **mongodb** (2.4.6) MongoDB: A cross-platform document-oriented NoSQL database system
- **mono** (3.2.8) Mono: a software platform designed to allow developers to easily create cross platform applications. 
- **mysql** (5.6.15) MySQL: The world's most popular open-source relational database
- **nginx** (1.4.4) The High Performance Reverse Proxy, Load Balancer, Edge Cache, Origin Server
- **ocaml** (4.01.0) OCaml: an industrial strength programming language supporting functional, imperative and object-oriented styles
- **opam** (1.1.1-1) OPAM: a source-based package manager for OCaml.
- **openldap** (2.4.39) OpenLDAP: an open source implementation of the Lightweight Directory Access Protocol.
- **phantomjs** (1.9.1) PhantomJS: A headless WebKit scriptable with a JavaScript API
- **php5** php5 (5.5.10-2) PHP 5.5: A popular general-purpose scripting language that is especially suited to web development. Prebuild extensions default + mbstring, mysql, sqlite3 and openssl       
- **php5-apache2** (5.5.10-2) Php5 Apache: a php5 module for apache2.
- **php5-bcmath** (5.5.10-1) BC Math module for php5
- **php5-bz2** (5.5.10-1) BZ2 module for php5
- **php5-curl** (5.5.10-1) curl module for php5 
- **php5-exif** (5.5.10-1) Exif module for php5
- **php5-fpm** (5.5.10-2)  PHP5-FPM: an alternative PHP FastCGI implementation with some additional features (mostly) useful for heavy-loaded sites
- **php5-ftp** (5.5.10-1) ftp module for php5
- **php5-gd** (5.5.10-1) GD module for php5  
- **php5-imagick** (3.1.2-2) ImageMagick module for php5
- **php5-imap** (5.5.10-1) IMAP module for php5
- **php5-intl** (5.5.10-1) Intl module for php5
- **php5-ldap** (5.5.10-1) ldap module for php5
- **php5-lzf** (1.6.2-2) LZF module for php5
- **php5-mongo** (1.4.5-2) Mongo driver for php5
- **php5-oauth** (1.2.3-2) OAuth module for php5
- **php5-pcntl** (5.5.10-1) Process Control support module for php5
- **php5-pdo-mysql** (5.5.10-1) PDO MySql module for php5                                                                                                            
- **php5-pdo-pgsql** (5.5.10-1) PDO PostgreSQL module for php5                                                                                                       
- **php5-pgsql** (5.5.10-1) PostgreSQL module for php5                                                                                                           
- **php5-soap** (5.5.10-1) soap module for php5 
- **php5-ssh2** (0.12-2) SSH2 module for php5
- **php5-xdebug** (2.2.4-1) Xdebug module for php5 
- **php5-xsl** (5.5.10-1) XSL module for php5                                                                                                                                             
- **php5-zip** (5.5.10-1) zip module for php5                                                                                                                  
- **php5-zlib** (5.5.10-1) zlib module for php5 
- **phpmyadmin** (4.1.7) phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web
- **phppgadmin** (5.1) phpPgAdmin: a web-based administration tool for PostgreSQL.
- **phpunit** (3.7.32) PHPUnit: A programmer-oriented testing framework for PHP.
- **pip** (1.5.4-2) Pip: A tool for installing and managing Python packages 
- **postgresql** (9.2.4) PostgreSQL: The world's most advanced open-source database system
- **python2** (2.7.6-2) Python 2: The most friendly Programming Language                                                                                     
- **python3** (3.3.4-2) Python 3: Next generation of the most friendly Programming Language    
- **r_base** (3.0.3) R: A free software programming language and software environment for statistical computing and graphics
- **rabbitmq** (3.2.3) AMQP server written in Erlang
- **redis** (2.6.16) Redis: An open-source, in-memory, key-value data store
- **rust** (0.9) Rust: A safe, concurrent, practical language
- **s3cmd** (1.0.1-1) s3cmd: Command line tool for managing Amazon S3 and CloudFront services
- **scala** (2.10.3) Scala: An object-functional programming language
- **setuptools** (2.2-2) Setuptools: Easily download, build, install, upgrade, and uninstall Python packages  
- **sqlite3** (3.8.2) SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine.
- **swig** (2.0.11) Swig: An interface compiler that connects programs written in C and C++ with scripting languages such as Perl, Python, Ruby, and Tcl.
- **tcsh** (6.18.01) tcsh: TENEX C Shell, an enhanced version of Berkeley csh, usable both as an interactive login shell and a shell script command processor      
- **tee-clc** (12.0.0) Command-line Client for Team Foundation Server
- **the_silver_searcher** (0.18.1) The Silver Searcher: A code-searching tool similar to ack, with focus on speed
- **tig** (1.2.1) Tig: An ncurses-based text-mode interface for git
- **tmux** (1.9a) Tmux: a terminal multiplexer that lets you switch easily between several programs in one terminal.
- **tomcat** (7.0.52) Apache Tomcat: an open source software implementation of the Java Servlet and JavaServer Pages technologies.                                  
- **virtualenv** (1.11.4-2) Virtualenv: Virtual Python Environment builder 

