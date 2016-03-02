# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Comments data

(1..40).to_a.each { |i|
  Comment.create!(
  commenter_id: 1,
  body: "co" + (["o", "o", "o", "o", "o"].sample(rand(1..5)).join("")) + "l" + " stuff",
  product_id: rand(1..19)
  )
}

# ["ruby gem", "chrome extension", "atom package", "js lib", "js framework", "codec", "algorithms", "api"]

# Products data

Product.create!(
name: 'Pry',
description: 'A ruby debugging tool with crazy features',
link: 'http://pryrepl.org/',
author_id: 1,
category: "ruby gem"
# image: "/assets/ruby2"
)

Product.create!(
name: 'Faker',
description: 'Make your data seeding fast',
link: 'https://github.com/stympy/faker',
author_id: 1,
category: "ruby gem"
)

Product.create!(
name: 'Binding of caller',
description: "Retrieve the binding of a method's caller",
link: 'https://github.com/banister/binding_of_caller',
author_id: 1,
category: "ruby gem"
)

Product.create!(
name: 'Pesticide',
description: "See all the html element of any page",
link: 'https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh',
author_id: 1,
category: "chrome extension"
)

Product.create!(
name: 'CSS viewer',
  description: "Hover over any DOM element to see its css",
link: 'https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce',
author_id: 1,
category: "chrome extension"
)

Product.create!(
name: 'Postman',
description: "Build, test, and document your APIs faster",
link: 'https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop',
author_id: 1,
category: "chrome extension"
)

Product.create!(
name: 'ESLinter',
description: "Display javascript syntax errors while typing",
link: 'https://atom.io/packages/linter',
author_id: 1,
category: "Atom Package"
)

Product.create!(
name: 'Monokai-seti theme',
description: "A nice, intuitive and non polluting theme for atom",
link: 'https://atom.io/themes/monokai-seti',
author_id: 1,
category: "Atom Package"
)

Product.create!(
name: 'ternjs',
description: "JavaScript code intelligence for atom",
link: 'https://atom.io/packages/atom-ternjs',
author_id: 1,
category: "Atom Package"
)

Product.create!(
name: 'knockout.js',
description: "Simplify dynamic JavaScript UIs with Model-View-View Model",
link: 'http://knockoutjs.com/',
author_id: 1,
category: "JS Lib"
)

Product.create!(
name: 'underscore.js',
description: "a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects",
link: 'http://underscorejs.org/',
author_id: 1,
category: "JS Lib"
)

Product.create!(
name: 'reveal.js',
description: "Pure JavaScript Library For HTML5 Web Presentation",
link: 'http://lab.hakim.se/reveal-js/#/1',
author_id: 1,
category: "JS Lib"
)

Product.create!(
name: 'CoffeScript',
description: "CoffeeScript is a little language that compiles into JavaScript",
link: 'http://coffeescript.org/',
author_id: 1,
category: "JS Lib"
)

Product.create!(
name: 'Unminify',
description: "un-minify JavaScript, CSS and HTML code",
link: 'http://unminify.com/',
author_id: 1,
category: "Dev tool"
)

Product.create!(
name: 'ReactJS',
description: "A javascript librairy for building user interface",
link: 'https://facebook.github.io/react/',
author_id: 1,
category: "JS framework"
)

Product.create!(
name: 'EmberJS',
description: "A framework for creating ambitious web applications",
link: 'http://emberjs.com/',
author_id: 1,
category: "JS framework"
)

Product.create!(
name: 'jQuery',
description: "Manipulate DOM elements easily",
link: 'https://jquery.com/',
author_id: 1,
category: "JS Lib"
)

Product.create!(
name: 'FFMEG',
description: "cross-platform solution to record, convert and stream audio and video",
link: 'https://www.ffmpeg.org/',
author_id: 1,
category: "Codec"
)

Product.create!(
name: 'Opus',
description: "Interactive speech and music transmission over the Internet",
link: 'https://www.opus-codec.org/',
author_id: 1,
category: "Codec"
)
