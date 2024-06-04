<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Plataforma de reportatge d’esdeveniments en base a la geolocalització</h3>

  <p align="center">
    Grau d’Enginyeria Informàtica | Serveis basats en localització i espais intel·ligents 
    <br />
    <br />
    <a href="https://uoc-2024-p-tfg-projecte.vercel.app/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![TFG Screen Shot][product-screenshot]](https://uoc-2024-p-tfg-projecte.vercel.app/)

The final thesis is based on creating a tool that uses current geolocation technologies. For this reason I propose to develop a system that allows reporting events through a web application obtaining the device’s browser geolocation where is running the application.

This application shows the reported events in a panel that can be visualized and managed, in order to know the instant status in a geographical region.

It's designed using a multi tenant structure.

It contains two frontends:
- Public access page: used to report events in a tenant
- Dashboard: used to manage reported events in a tenant

Each tenant has separated data, only report status typification is shared between tenants.

This software uses a user identification creating an identifier for each navigator instead using IP matching. For each unidentified navigator it creates a random string that it's stored into navigator local storage.

This identifier can be provided using an external token, embedded using an URL query.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![tailwindcss][tailwindcss]][tailwindcss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set environment vars
    ```env
    POSTGRES_PRISMA_URL=""
    POSTGRES_URL_NON_POOLING=""
    ```
4. Create and seed database
    ```
    npx prisma db push
    npx prisma db seed
    ```
5. Start webserver
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- [x] Public base
    - [x] Report list
    - [x] Report detail
    - [x] Report create
    - [x] Report attachment management
- [x] Dashboard base
    - [x] Add report to map (pointer)
    - [x] Report detail
    - [x] Access only with admin key
    - [x] Report modify
    - [x] Site config management
- [ ] Testing
    - [x] Check what if location does not work or is not enabled
    - [x] Check admin fence
    - [ ] Report propvided by known persons
- [ ] Extra improvements:
    - [ ] Use NextResponse instead Response
    - [ ] Create end-to-end test 
    - [ ] Use websockets to refresh live
    - [ ] Multi-language Support
        - [ ] Catalan
        - [ ] Spanish
        - [ ] English
        - [ ] French
    - [ ] Tenant management screen (CRUD)
    - [ ] Map pointer use status color 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Plataforma de reportatge d’esdeveniments en base a la geolocalització © 2024 by Oscar Sánchez Roca is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Oscar Sánchez Roca - osharo(at)uoc.edu

[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE](https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best README Template](https://github.com/othneildrew/Best-README-Template/)
* [Vercel](https://vercel.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/osanchezroca/UOC-2024P-TFG-PROJECTE.svg?style=for-the-badge
[contributors-url]: https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/osanchezroca/UOC-2024P-TFG-PROJECTE.svg?style=for-the-badge
[forks-url]: https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE/network/members
[stars-shield]: https://img.shields.io/github/stars/osanchezroca/UOC-2024P-TFG-PROJECTE.svg?style=for-the-badge
[stars-url]: https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE/stargazers
[issues-shield]: https://img.shields.io/github/issues/osanchezroca/UOC-2024P-TFG-PROJECTE.svg?style=for-the-badge
[issues-url]: https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE/issues
[license-shield]: https://img.shields.io/github/license/osanchezroca/UOC-2024P-TFG-PROJECTE.svg?style=for-the-badge
[license-url]: https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/product-landing-page.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss 
[tailwindcss-url]: https://tailwindcss.com 
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/