export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6234a876eb7fe77ae82cf12d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v8q3y3sp',
                  apiId: '61ee1579-a09b-414d-b59b-35666f0f65ee'
                },
                {
                  buildHookId: '6234a87713f2c16b68d9374c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5cztx2a8',
                  apiId: 'a48e9846-b19e-47d3-bb95-1c740a3d55ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jensbredberg/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5cztx2a8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
