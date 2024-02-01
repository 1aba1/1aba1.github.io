// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/gitProject/vitepress/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  locales: {
    root: {
      lang: "zh_CN",
      label: "\u4E2D\u6587",
      title: "\u51AF\u6797",
      description: "\u5206\u4EAB\u7F8E\u597D\u4E8B\u60C5\uFF0C\u671F\u5F85\u4E0E\u4F60\u76F8\u9047",
      themeConfig: getChinsesThemeConfig()
    },
    en: {
      lang: "en",
      label: "English",
      title: "Custom title",
      description: "Custom description",
      themeConfig: getEnglishThemeConfig()
    }
  },
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728Github\u7F16\u8F91\u6B64\u9875"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/1aba1" },
      { icon: "twitter", link: "https://twitter.com/hanabahan000" },
      {
        icon: {
          svg: '<svg t="1706538590537" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3944" width="200" height="200"><path d="M1359.35 962.136l-408.149-474.71 408.625-423.363c2.912 8.736 4.933 17.888 4.933 27.515v841.616c0 10.163-2.199 19.79-5.408 28.942zM817.727 483.564L682.41 589.524l-134.9-105.722-68.521-53.604L67.926 4.933C76.424 2.496 85.219 0.773 94.49 0.773h1175.957c9.27 0 18.007 1.723 26.505 4.16L886.128 429.9l-68.402 53.663zM5.586 962.136a85.635 85.635 0 0 1-5.408-28.942V91.578c0-9.627 2.02-18.779 4.933-27.515l408.863 423.542L5.586 962.135zM682.41 697.92L882.74 541.03l413.142 479.107a94.728 94.728 0 0 1-25.435 3.863H94.49c-8.855 0-17.293-1.605-25.435-3.803l413.38-478.929L682.409 697.92z" p-id="3945"></path></svg>'
        },
        link: "mailto:flin33636@gmail.com"
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2019-present Evan You"
    },
    search: {
      provider: "local"
    }
  }
});
function getChinsesThemeConfig() {
  return {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u535A\u5BA2", link: "/guide/blog/index" },
      { text: "\u7B14\u8BB0", link: "/" },
      {
        text: "\u65E5\u5E38",
        items: [
          { text: "\u601D\u8003", link: "/guide/diary/think/philosophyOfComputer.md" },
          { text: "\u751F\u6D3B", link: "/guide/diary/life/2024.1.29.md" }
        ]
      }
    ],
    sidebar: {
      "/guide/diary": [
        {
          text: "\u601D\u8003",
          collapsed: true,
          items: [
            { text: "\u8BA1\u7B97\u673A\u7684\u54F2\u5B66", link: "/guide/diary/think/philosophyOfComputer.md" },
            { text: "\u540E\u7AEF\u7684\u827A\u672F", link: "/guide/books/deepLearning1.md" },
            { text: "\u5982\u4F55\u9AD8\u6548\u5730\u5B66\u4E60\uFF1F", link: "/guide/diary/daily.md" }
          ]
        },
        {
          text: "\u751F\u6D3B",
          collapsed: true,
          items: [
            { text: "2024.1.29\u65E5\u5E38", link: "/guide/diary/life/2024.1.29.md" },
            { text: "2024.1.28", link: "/guide/diary/think.md" },
            { text: "2024.1.27", link: "/guide/diary/daily.md" }
          ]
        }
      ],
      "/guide/project": [
        {
          text: "\u4F34\u5C14\u540C\u884C",
          link: "/guide/project/baner.md"
        },
        {
          text: "\u6C57\u9752\u9601",
          link: "/guide/project/hanqin.md"
        },
        {
          text: "2023\u6570\u6A21\u56FD\u8D5B",
          link: "/guide/project/23MathematicalModel.md"
        }
      ],
      "/guide/paper": [
        {
          text: "\u57FA\u4E8EXXX\u7684XXX",
          link: "/guide/paper/firstPaper.md"
        }
      ],
      "/guide/blog/": [
        {
          text: "2024",
          collapsed: true,
          items: [
            { text: "k\u90BB\u8FD1\u7B97", link: "/guide/diary/life/2024.1.29.md" },
            { text: "\u4EA4\u53C9\u71B5", link: "/guide/diary/think.md" }
          ]
        },
        {
          text: "2023",
          collapsed: true,
          items: [
            { text: "git\u5E38\u89C1\u64CD\u4F5C", link: "/guide/blog/2023/2024.1.29.md" }
          ]
        }
      ]
    }
  };
}
function getEnglishThemeConfig() {
  return {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "\u8BB0\u5F55",
        items: [
          { text: "\u6280\u672F", link: "/guide/diary/code.md" },
          { text: "\u601D\u8003", link: "/guide/diary/think.md" },
          { text: "\u65E5\u5E38", link: "/guide/diary/daily.md" }
        ]
      },
      {
        text: "\u6587\u7AE0",
        items: [
          {
            items: [
              { text: "\u7B97\u6CD5", link: "/guide/article/code.md" },
              { text: "\u8BA1\u7B97\u673A\u57FA\u7840", link: "/guide/article/foundation.md" }
            ]
          },
          {
            items: [
              { text: "\u9879\u76EE", link: "/article/project.md" }
            ]
          }
        ]
      }
    ],
    sidebar: {
      "/guide/diary": [
        {
          text: "\u4E66\u7C4D\u7B14\u8BB0",
          collapsed: true,
          items: [
            { text: "\u673A\u5668\u5B66\u4E60\uFF08\u897F\u74DC\u4E66\uFF09", link: "/guide/diary/code.md" },
            { text: "\u6DF1\u5EA6\u5B66\u4E60\u5165\u95E8", link: "/guide/books/deepLearning1.md" },
            { text: "\u6DF1\u5EA6\u5B66\u4E60\u8FDB\u9636(\u57FA\u4E8ENLP)", link: "/guide/diary/daily.md" }
          ]
        },
        {
          text: "\u65E5\u5E38",
          collapsed: true,
          items: [
            { text: "2024.1.29", link: "/guide/diary/code.md" },
            { text: "2024.1.28", link: "/guide/diary/think.md" },
            { text: "2024.1.27", link: "/guide/diary/daily.md" }
          ]
        }
      ]
    }
  };
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRQcm9qZWN0XFxcXHZpdGVwcmVzc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGdpdFByb2plY3RcXFxcdml0ZXByZXNzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9naXRQcm9qZWN0L3ZpdGVwcmVzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28ucG5nJyB9XV0sXG4gIGxvY2FsZXM6IHsgIFxuICAgIHJvb3QgOiB7XG4gICAgICBsYW5nOiBcInpoX0NOXCIsXG4gICAgICBsYWJlbDogJ1x1NEUyRFx1NjU4NycsXG4gICAgICB0aXRsZTogXCJcdTUxQUZcdTY3OTdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NTIwNlx1NEVBQlx1N0Y4RVx1NTk3RFx1NEU4Qlx1NjBDNVx1RkYwQ1x1NjcxRlx1NUY4NVx1NEUwRVx1NEY2MFx1NzZGOFx1OTA0N1wiLFxuICAgICAgdGhlbWVDb25maWc6IGdldENoaW5zZXNUaGVtZUNvbmZpZygpXG4gICAgfSxcbiAgICBlbjoge1xuICAgICAgbGFuZzogXCJlblwiLFxuICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICAgIHRpdGxlOiBcIkN1c3RvbSB0aXRsZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ3VzdG9tIGRlc2NyaXB0aW9uXCIsXG4gICAgICB0aGVtZUNvbmZpZzogZ2V0RW5nbGlzaFRoZW1lQ29uZmlnKCksXG4gICAgfVxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286XCIvbG9nby5wbmdcIixcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvZWRpdC9tYWluL2RvY3MvOnBhdGgnLFxuICAgICAgdGV4dDogJ1x1NTcyOEdpdGh1Ylx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NSdcbiAgICB9LFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tLzFhYmExJyB9LFxuICAgICAgeyBpY29uOiAndHdpdHRlcicsIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL2hhbmFiYWhhbjAwMCcgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICBzdmc6ICc8c3ZnIHQ9XCIxNzA2NTM4NTkwNTM3XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMzY1IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIzOTQ0XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTEzNTkuMzUgOTYyLjEzNmwtNDA4LjE0OS00NzQuNzEgNDA4LjYyNS00MjMuMzYzYzIuOTEyIDguNzM2IDQuOTMzIDE3Ljg4OCA0LjkzMyAyNy41MTV2ODQxLjYxNmMwIDEwLjE2My0yLjE5OSAxOS43OS01LjQwOCAyOC45NDJ6TTgxNy43MjcgNDgzLjU2NEw2ODIuNDEgNTg5LjUyNGwtMTM0LjktMTA1LjcyMi02OC41MjEtNTMuNjA0TDY3LjkyNiA0LjkzM0M3Ni40MjQgMi40OTYgODUuMjE5IDAuNzczIDk0LjQ5IDAuNzczaDExNzUuOTU3YzkuMjcgMCAxOC4wMDcgMS43MjMgMjYuNTA1IDQuMTZMODg2LjEyOCA0MjkuOWwtNjguNDAyIDUzLjY2M3pNNS41ODYgOTYyLjEzNmE4NS42MzUgODUuNjM1IDAgMCAxLTUuNDA4LTI4Ljk0MlY5MS41NzhjMC05LjYyNyAyLjAyLTE4Ljc3OSA0LjkzMy0yNy41MTVsNDA4Ljg2MyA0MjMuNTQyTDUuNTg2IDk2Mi4xMzV6TTY4Mi40MSA2OTcuOTJMODgyLjc0IDU0MS4wM2w0MTMuMTQyIDQ3OS4xMDdhOTQuNzI4IDk0LjcyOCAwIDAgMS0yNS40MzUgMy44NjNIOTQuNDljLTguODU1IDAtMTcuMjkzLTEuNjA1LTI1LjQzNS0zLjgwM2w0MTMuMzgtNDc4LjkyOUw2ODIuNDA5IDY5Ny45MnpcIiBwLWlkPVwiMzk0NVwiPjwvcGF0aD48L3N2Zz4nLFxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiBcIm1haWx0bzpmbGluMzM2MzZAZ21haWwuY29tXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLicsXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMTktcHJlc2VudCBFdmFuIFlvdSdcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICBcbiAgfVxufSlcblxuXG4vLyBcdTgzQjdcdTUzRDZcdTRFMkRcdTY1ODdcdTVFMDNcdTVDNDBcdTkxNERcdTdGNkVcbmZ1bmN0aW9uIGdldENoaW5zZXNUaGVtZUNvbmZpZygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnXHU1MzVBXHU1QkEyJywgbGluazogJy9ndWlkZS9ibG9nL2luZGV4JyB9LFxuICAgICAgeyB0ZXh0OiAnXHU3QjE0XHU4QkIwJywgbGluazogJy8nIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiAnXHU2NUU1XHU1RTM4JywgXG4gICAgICAgIGl0ZW1zOltcbiAgICAgICAgICB7dGV4dDonXHU2MDFEXHU4MDAzJyxsaW5rOicvZ3VpZGUvZGlhcnkvdGhpbmsvcGhpbG9zb3BoeU9mQ29tcHV0ZXIubWQnfSxcbiAgICAgICAgICB7dGV4dDonXHU3NTFGXHU2RDNCJyxsaW5rOicvZ3VpZGUvZGlhcnkvbGlmZS8yMDI0LjEuMjkubWQnfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gICAgc2lkZWJhcjoge1xuICAgICAgXCIvZ3VpZGUvZGlhcnlcIjpbXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NjAxRFx1ODAwMycsIFxuICAgICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHt0ZXh0OidcdThCQTFcdTdCOTdcdTY3M0FcdTc2ODRcdTU0RjJcdTVCNjYnLGxpbms6Jy9ndWlkZS9kaWFyeS90aGluay9waGlsb3NvcGh5T2ZDb21wdXRlci5tZCd9LFxuICAgICAgICAgICAge3RleHQ6J1x1NTQwRVx1N0FFRlx1NzY4NFx1ODI3QVx1NjcyRicsbGluazonL2d1aWRlL2Jvb2tzL2RlZXBMZWFybmluZzEubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OidcdTU5ODJcdTRGNTVcdTlBRDhcdTY1NDhcdTU3MzBcdTVCNjZcdTRFNjBcdUZGMUYnLGxpbms6Jy9ndWlkZS9kaWFyeS9kYWlseS5tZCd9XG4gICAgICAgICAgXVxuICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NzUxRlx1NkQzQicsIFxuICAgICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHt0ZXh0OicyMDI0LjEuMjlcdTY1RTVcdTVFMzgnLGxpbms6Jy9ndWlkZS9kaWFyeS9saWZlLzIwMjQuMS4yOS5tZCd9LFxuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yOCcsbGluazonL2d1aWRlL2RpYXJ5L3RoaW5rLm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonMjAyNC4xLjI3JyxsaW5rOicvZ3VpZGUvZGlhcnkvZGFpbHkubWQnfVxuICAgICAgICAgIF1cbiAgICAgIFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2d1aWRlL3Byb2plY3RcIjpbXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NEYzNFx1NUMxNFx1NTQwQ1x1ODg0QycsIFxuICAgICAgICAgIGxpbms6Jy9ndWlkZS9wcm9qZWN0L2JhbmVyLm1kJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTZDNTdcdTk3NTJcdTk2MDEnLCBcbiAgICAgICAgICBsaW5rOicvZ3VpZGUvcHJvamVjdC9oYW5xaW4ubWQnXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJzIwMjNcdTY1NzBcdTZBMjFcdTU2RkRcdThENUInLCBcbiAgICAgICAgICBsaW5rOicvZ3VpZGUvcHJvamVjdC8yM01hdGhlbWF0aWNhbE1vZGVsLm1kJ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2d1aWRlL3BhcGVyXCI6W1xuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTU3RkFcdTRFOEVYWFhcdTc2ODRYWFgnLCBcbiAgICAgICAgICBsaW5rOicvZ3VpZGUvcGFwZXIvZmlyc3RQYXBlci5tZCdcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBcIi9ndWlkZS9ibG9nL1wiOltcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnMjAyNCcsIFxuICAgICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHt0ZXh0OidrXHU5MEJCXHU4RkQxXHU3Qjk3JyxsaW5rOicvZ3VpZGUvZGlhcnkvbGlmZS8yMDI0LjEuMjkubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OidcdTRFQTRcdTUzQzlcdTcxQjUnLGxpbms6Jy9ndWlkZS9kaWFyeS90aGluay5tZCd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnMjAyMycsIFxuICAgICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHt0ZXh0OidnaXRcdTVFMzhcdTg5QzFcdTY0Q0RcdTRGNUMnLGxpbms6Jy9ndWlkZS9ibG9nLzIwMjMvMjAyNC4xLjI5Lm1kJ30sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xufVxuXG5cbi8vIFx1ODNCN1x1NTNENlx1ODJGMVx1NjU4N1x1NUUwM1x1NUM0MFx1OTE0RFx1N0Y2RVxuZnVuY3Rpb24gZ2V0RW5nbGlzaFRoZW1lQ29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogJ1x1OEJCMFx1NUY1NScsIFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge3RleHQ6J1x1NjI4MFx1NjcyRicsbGluazonL2d1aWRlL2RpYXJ5L2NvZGUubWQnfSxcbiAgICAgICAgICB7dGV4dDonXHU2MDFEXHU4MDAzJyxsaW5rOicvZ3VpZGUvZGlhcnkvdGhpbmsubWQnfSxcbiAgICAgICAgICB7dGV4dDonXHU2NUU1XHU1RTM4JyxsaW5rOicvZ3VpZGUvZGlhcnkvZGFpbHkubWQnfVxuICAgICAgICBdXG4gICAgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogJ1x1NjU4N1x1N0FFMCcsIFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgICB7dGV4dDonXHU3Qjk3XHU2Q0Q1JyxsaW5rOicvZ3VpZGUvYXJ0aWNsZS9jb2RlLm1kJ30sXG4gICAgICAgICAgICAgIHt0ZXh0OidcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDAnLGxpbms6Jy9ndWlkZS9hcnRpY2xlL2ZvdW5kYXRpb24ubWQnfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgICAge3RleHQ6J1x1OTg3OVx1NzZFRScsbGluazonL2FydGljbGUvcHJvamVjdC5tZCd9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgc2lkZWJhcjoge1xuICAgICAgXCIvZ3VpZGUvZGlhcnlcIjpbXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NEU2Nlx1N0M0RFx1N0IxNFx1OEJCMCcsIFxuICAgICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHt0ZXh0OidcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjBcdUZGMDhcdTg5N0ZcdTc0RENcdTRFNjZcdUZGMDknLGxpbms6Jy9ndWlkZS9kaWFyeS9jb2RlLm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonXHU2REYxXHU1RUE2XHU1QjY2XHU0RTYwXHU1MTY1XHU5NUU4JyxsaW5rOicvZ3VpZGUvYm9va3MvZGVlcExlYXJuaW5nMS5tZCd9LFxuICAgICAgICAgICAge3RleHQ6J1x1NkRGMVx1NUVBNlx1NUI2Nlx1NEU2MFx1OEZEQlx1OTYzNihcdTU3RkFcdTRFOEVOTFApJyxsaW5rOicvZ3VpZGUvZGlhcnkvZGFpbHkubWQnfVxuICAgICAgICAgIF1cbiAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTY1RTVcdTVFMzgnLCBcbiAgICAgICAgICBjb2xsYXBzZWQ6dHJ1ZSxcbiAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICB7dGV4dDonMjAyNC4xLjI5JyxsaW5rOicvZ3VpZGUvZGlhcnkvY29kZS5tZCd9LFxuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yOCcsbGluazonL2d1aWRlL2RpYXJ5L3RoaW5rLm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonMjAyNC4xLjI3JyxsaW5rOicvZ3VpZGUvZGlhcnkvZGFpbHkubWQnfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn1cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UyxTQUFTLG9CQUFvQjtBQUd0VSxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixhQUFhO0FBQUEsRUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFBQSxFQUNuRCxTQUFTO0FBQUEsSUFDUCxNQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixhQUFhLHNCQUFzQjtBQUFBLElBQ3JDO0FBQUEsSUFDQSxJQUFJO0FBQUEsTUFDRixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixhQUFhLHNCQUFzQjtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sMkJBQTJCO0FBQUEsTUFDbkQsRUFBRSxNQUFNLFdBQVcsTUFBTSxtQ0FBbUM7QUFBQSxNQUM1RDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFVBQ0EsS0FBSztBQUFBLFFBQ1g7QUFBQSxRQUNBLE1BQU07QUFBQSxNQUNSO0FB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
