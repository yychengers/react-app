module.exports = [
    {
        type: 'confirm',
            name: 'private',
            message: 'ths resgistery is private?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'author?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'description?',
    }, 
    {
        type: 'input',
        name: 'license',
        message: 'license?',
    }

];



create: {
    alias: 'c', // 别名
    description: '创建一个项目',
    examples: [
      'demo-cli create <project-name>'
    ]
  }