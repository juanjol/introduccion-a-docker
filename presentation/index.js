import React from "react";

import YouTube from 'react-youtube';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  transparent_docker_logo: require("../assets/docker-logo.png"),
  docker_logo: require("../assets/docker.jpg"),
  matrix: require("../assets/the-matrix-from-hell.png"),
  challenge: require("../assets/the-challenge.png"),
  simil1: require("../assets/simil1.png"),
  simil2: require("../assets/simil2.png"),
  simil3: require("../assets/simil3.png"),
  simil4: require("../assets/simil4.png"),
  container_vs_vm: require("../assets/containers-vs-vms.png"),
  docker_compose: require("../assets/docker-compose.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  botijo: require("../assets/botijo.jpg"),
  markdown: require("../assets/markdown.png"),
  sylvi: require("../assets/sylvia.jpg"),
  rambo: require("../assets/rambo.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {


    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300}>
          <Slide transition={["zoom"]} bgColor="primary">
              {/* Diapo vacía */}
          </Slide>
          <Slide transition={["zoom"]} bgColor="black"  notes="Antes de comenzar, he de sincerarme...">
              {/* Diapo vacía */}
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Docker
            </Heading>
            <Heading size={5} textColor="red">
              Open Biko XI
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage="https://media.giphy.com/media/l41lVOwdFwKQzb6ta/giphy.gif" bgDarken={0.2} notes="Mucho hype, pero no nos confiemos">
            <Heading size={2} caps textColor="white">
              Docker
            </Heading>
            <Image src={images.transparent_docker_logo.replace("/", "")} margin="0px auto 40px" height="293px"/>

          </Slide>

          <Slide transition={["fade"]} bgColor="black" notes="Comienzo pesimista? Sí! pero... ">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Wait What?
            </Heading>
          </Slide>

          <Slide bgColor="primary" notes="No es nuevo. Comb de func. linx Kernl:cgroups, namespaces, sis. fich Aufs. ">
            <Image src={images.botijo.replace("/", "")} fit margin="0px auto 40px" />
          </Slide>

          <Slide bgColor="secondary" textColor="primary" notes="Marzo 2013, dotcloud proveedor PaaS - [Kubernetes]">

            <Heading size={4} caps lineHeight={1} textColor="white">
              Evolución
            </Heading>

              <Link href="https://www.mindmeister.com/es/389671722/docker-ecosystem"  target="_blank">
                <Appear fid="2"><Text bold caps textColor="primary">Docker Mind Map</Text>
                </Appear>
              </Link>
              <List>
                <Appear><ListItem>Ebay</ListItem></Appear>
                <Appear><ListItem>Cloudflare</ListItem></Appear>
                <Appear><ListItem>Yandex</ListItem></Appear>
                <Appear><ListItem>Rackspace</ListItem></Appear>
                <Appear><ListItem>Spotify</ListItem></Appear>
                <Appear><ListItem>...</ListItem></Appear>
              </List>
          </Slide>

          <Slide bgColor="black" notes="** Para entenderlo os explico el reto">
            <Heading size={5} caps lineHeight={1} textColor="white">
              ¡¡Qué buena pinta!!
            </Heading>
            <Appear>
            <Heading size={2} caps lineHeight={1} textColor="primary">
              ¿Pero qué es "docker"?
            </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="black" notes="Multiples PILAS para múltiple HARDWAR + OS">
            <Heading size={4} caps lineHeight={1} textColor="white">
              El reto
            </Heading>
            <Image src={images.challenge.replace("/", "")} width="100%"/>
          </Slide>

          <Slide bgColor="black" notes="Mejor os propongo un simil">
            <Heading size={4} caps lineHeight={1} textColor="white">
              "The Matrix from Hell"
            </Heading>
            <Image src={images.matrix.replace("/", "")} width="80%"/>
          </Slide>

          <Slide bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              "El transporte antes de los años 60"
            </Heading>
            <Image src={images.simil1.replace("/", "")} width="100%"/>
          </Slide>

          <Slide bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              The "Transport Tycoon" Matrix from Hell
            </Heading>
            <Image src={images.simil2.replace("/", "")} width="80%"/>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white">
              El contenedor (Docker)
            </Heading>
            <Image src={images.simil3.replace("/", "")} width="100%"/>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Docker
            </Heading>
            <Image src={images.simil4.replace("/", "")} width="100%"/>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white" notes="Antes vagrant, ahora esto? ¿En qué se diferencia?">
              VMs vs Contenedores
            </Heading>
            <Image src={images.container_vs_vm.replace("/", "")} width="100%"/>
          </Slide>

          <Slide bgColor="black" notes="Copy-On-Write, solo guarda diferencia entre contenedores. Imágenes entre 100 y 200 megas habitualmente">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Sus características
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>Transportable</ListItem></Appear>
              <Appear><ListItem>Capa de red aislada</ListItem></Appear>
              <Appear><ListItem>Sistema de ficheros aislados</ListItem></Appear>
              <Appear><ListItem>Sin dependencias</ListItem></Appear>
              <Appear><ListItem>Rápido</ListItem></Appear>
              <Appear><ListItem>Copy on write</ListItem></Appear>
              <Appear><ListItem>Multiplataforma...</ListItem></Appear>
              <Appear><ListItem>...</ListItem></Appear>
              <Appear><ListItem>Bueno, vale, casi multiplataforma</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Demo time!!
            </Heading>
            <Image src="http://www.reactiongifs.com/wp-content/uploads/2013/03/computing.gif" width="100%"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Demo 1, docker hub
            </Heading>
            <div>
              <YouTube videoId="sEWqvqa7cIU" />
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} margin="0px auto 80px" textColor="white">
              ¡Cómo mola docker hub!
            </Heading>
            <Heading size={4}  lineHeight={1} textColor="black">
              <Link href="https://hub.docker.com/" textColor="black" target="_blank">
                <Text bold textColor="tertiary">hub.docker.com</Text>
              </Link>
            </Heading>

          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Demo 2, compila tu propio contenedor
            </Heading>
            <div>
              <YouTube videoId="iFWz1YEKzOk" />
            </div>
          </Slide>

          <Slide  transition={["slide"]}  bgColor="black">
            <Heading size={5} caps lineHeight={1} textColor="white">
              Esto sobre linux... ¿Y en OSX?
            </Heading>
            <Appear>
              <Heading size={2} caps lineHeight={1} textColor="primary">
                Docker machine
              </Heading>
            </Appear>

          </Slide>

          <Slide  transition={["slide"]}  bgColor="black" notes="Problemas de rendimiento de ficheros, permisos, capa extra...">
            <Layout>
              <Fill>
                  <Image src={images.sylvi.replace("/", "")} margin="0px auto 40px" height="293px"/>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Docker machine
                  </Heading>
              </Fill>
              <Appear>
              <Fill>
                  <Heading size={1} caps textColor="white" margin={10}>
                    ...
                  </Heading>
              </Fill>
              </Appear>
              <Appear>
              <Fill>

                  <Image src={images.rambo.replace("/", "")} margin="0px auto 40px" height="293px"/>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Dinghy
                  </Heading>

              </Fill>
              </Appear>
            </Layout>
          </Slide>


          <Slide  transition={["slide"]}  bgColor="black" notes="Si hay tiempo, cuenta los problemas de llevar dockers de forma independiente">
            <Heading size={5} caps lineHeight={1} textColor="white">
              John Rambo
            </Heading>
            <Appear>
              <Heading size={2} caps lineHeight={1} textColor="primary">
                Dinghy
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} caps lineHeight={1} textColor="primary">
                  Docker on OS X with batteries included
              </Heading>
            </Appear>
            <List textColor="white">
              <Appear><ListItem>Docker machine</ListItem></Appear>
              <Appear><ListItem>unfs3</ListItem></Appear>
              <Appear><ListItem>homebrew</ListItem></Appear>
              <Appear><ListItem>dnsmasc</ListItem></Appear>
              <Appear><ListItem>nginx como proxy</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={5} caps lineHeight={1} textColor="white">
              Y ahora...
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="black" notes="Si hay tiempo, cuenta los problemas de llevar dockers de forma independiente">
            <Heading size={5} caps lineHeight={1} textColor="white">
              ¿Cómo monto una pila compleja?
            </Heading>
            <Appear>
            <Heading size={2} caps lineHeight={1} textColor="primary">
              Docker compose
            </Heading>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={5} caps lineHeight={1} textColor="white">
              ¿Qué es docker compose?
            </Heading>
            <Appear>
              <BlockQuote>
                <Quote>Docker compose es una herramienta para definir y ejecutar aplicaciones multi-contenedor</Quote>
                <Cite>https://github.com/docker/compose</Cite>
              </BlockQuote>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="Si hay tiempo, cuenta los problemas de llevar dockers de forma independiente">
            <Heading size={5} caps lineHeight={1} textColor="white">
              Definiendo el entorno
            </Heading>
            <Image src={images.docker_compose.replace("/", "")} width="100%"/>

              <Link href="https://docs.docker.com/compose/compose-file/" textColor="black" target="_blank">
                <Appear>
                  <Text bold textColor="tertiary">https://docs.docker.com/compose/compose-file/</Text>
                </Appear>
              </Link>

          </Slide>

          <Slide bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Otra pequeña demo
            </Heading>
            <div>
              <YouTube videoId="LSBjHDlr6_4" />
            </div>
          </Slide>

          <Slide bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              ¿Cómo actuamos?
            </Heading>
            <Appear><Image src="https://media.giphy.com/media/38voPadxPeRX2/giphy.gif" width="100%"/></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white">
              El plan:
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Selección de imágenes oficiales</ListItem></Appear>
              <Appear><ListItem>Librería de imágenes custom</ListItem></Appear>
              <Appear><ListItem>Stacks preconfigurados para distintas tipologías</ListItem></Appear>
              <Appear><ListItem>Extenderlo a todos los equipos</ListItem></Appear>
              <Appear><ListItem>Dominar el mundo</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={4} caps lineHeight={1} textColor="white">
              ¿Más ideas?
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="white">
              ¿Dudas?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={2} caps lineHeight={1} textColor="white">
              Referencias:
            </Heading>
            <List textColor="primary">
              <ListItem>
                <Link href="https://www.docker.com/">
                <Text bold textColor="tertiary">https://www.docker.com/</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.docker.com/products/docker-compose">
                  <Text bold textColor="tertiary">https://www.docker.com/products/docker-compose</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://pointful.github.io/docker-intro/#/">
                  <Text bold  textColor="tertiary">http://pointful.github.io/docker-intro/#/</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/codekitchen/dinghy">
                  <Text bold  textColor="tertiary">https://github.com/codekitchen/dinghy</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.youtube.com/watch?v=o3FlTreJCSM">
                  <Text bold  textColor="tertiary">https://www.youtube.com/watch?v=o3FlTreJCSM</Text>
                </Link>
              </ListItem>
            </List>

          </Slide>

          <Slide transition={["fade"]} bgImage="https://media.giphy.com/media/jYAGkoghdmD9S/giphy.gif">
            {/* FIN!!*/}
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
