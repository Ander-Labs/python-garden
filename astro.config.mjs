// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Python Garden",
      defaultLocale: "es",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Ander-Labs/python-garden",
        },
      ],
      sidebar: [
        {
          label: "Introduccion",
          items: [
            { label: "Introduction", slug: "introduction/introduction" },
            { label: "Sintaxis básica", slug: "introduction/sintaxis-basica" },
            {
              label: "Estructuras de Control",
              slug: "introduction/estructuras-de-control",
            },
            { label: "Funciones", slug: "introduction/funciones" },
            {
              label: "Programación Orientada a Objetos",
              slug: "introduction/programacion-orientada-a-objetos",
            },
            { label: "Hola Mundo", slug: "introduction/hola-mundo" },
          ],
        },
        {
          label: "Guias",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
