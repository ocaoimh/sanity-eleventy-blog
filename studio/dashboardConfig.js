export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a8459e5c3f106ec95b0fa4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-35pzph5y',
                  apiId: '83e2ec5a-f088-4194-b9b6-3588f879307f'
                },
                {
                  buildHookId: '62a8459f6412216eaab0f216',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-dkay4og5',
                  apiId: '123153a4-a5f8-424a-b134-ecb95f8ff056'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ocaoimh/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-dkay4og5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
