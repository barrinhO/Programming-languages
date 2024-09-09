let dados = [
  {
    // item 0
    title: "Python",
    description:
      "Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade, muito usada em ciência de dados, automação e desenvolvimento web.",
    link: "https://www.python.org/",
  },

  {
    // item 1
    title: "JavaScript",
    description:
      "JavaScript é a linguagem de programação usada principalmente para desenvolvimento web, permitindo interatividade em páginas da web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  {
    // item 2
    title: "Java",
    description:
      "Java é uma linguagem de programação orientada a objetos, amplamente utilizada em desenvolvimento corporativo, aplicativos móveis e sistemas de larga escala.",
    link: "https://www.oracle.com/java/",
  },

  {
    // item 3
    title: "C",
    description:
      "C é uma linguagem de programação de baixo nível usada para desenvolvimento de sistemas operacionais, drivers de hardware e software de alto desempenho.",
    link: "https://devdocs.io/c/",
  },

  {
    // item 4
    title: "C++",
    description:
      "C++ é uma linguagem de programação que expande o C com suporte para programação orientada a objetos e é usada em jogos, sistemas embutidos e softwares de alta performance.",
    link: "https://isocpp.org/",
  },

  {
    // item 5
    title: "C#",
    description:
      "C# é uma linguagem de programação desenvolvida pela Microsoft, amplamente utilizada para desenvolvimento de aplicações de desktop, jogos e aplicações web no ecossistema .NET.",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },

  {
    // item 6
    title: "PHP",
    description:
      "PHP é uma linguagem de script do lado do servidor, muito usada para desenvolvimento web e criação de sites dinâmicos e aplicativos web.",
    link: "https://www.php.net/",
  },

  {
    // item 7
    title: "Ruby",
    description:
      "Ruby é uma linguagem de programação focada em simplicidade e produtividade, frequentemente usada com o framework Ruby on Rails para desenvolvimento web.",
    link: "https://www.ruby-lang.org/en/",
  },

  {
    // item 8
    title: "Swift",
    description:
      "Swift é uma linguagem de programação desenvolvida pela Apple para criar aplicativos iOS, macOS, watchOS e tvOS, projetada para ser segura e rápida.",
    link: "https://developer.apple.com/swift/",
  },

  {
    // item 9
    title: "Kotlin",
    description:
      "Kotlin é uma linguagem moderna, interoperável com Java, utilizada principalmente para o desenvolvimento de aplicativos Android.",
    link: "https://kotlinlang.org/",
  },

  {
    // item 10
    title: "TypeScript",
    description:
      "TypeScript é uma linguagem de programação que estende o JavaScript com tipagem estática opcional, ideal para grandes projetos.",
    link: "https://www.typescriptlang.org/",
  },

  {
    // item 11
    title: "Go",
    description:
      "Go é uma linguagem de programação desenvolvida pelo Google, conhecida por sua simplicidade, eficiência e suporte nativo a concorrência.",
    link: "https://go.dev/",
  },

  {
    // item 12
    title: "Rust",
    description:
      "Rust é uma linguagem de sistemas moderna, projetada para ser segura e eficiente, eliminando bugs comuns em gerenciamento de memória.",
    link: "https://www.rust-lang.org/",
  },

  {
    // item 13
    title: "Dart",
    description:
      "Dart é uma linguagem de programação otimizada para a criação de aplicativos móveis e web, usada principalmente com o framework Flutter.",
    link: "https://dart.dev/",
  },

  {
    // item 14
    title: "Objective-C",
    description:
      "Objective-C é uma linguagem de programação orientada a objetos que foi amplamente usada pela Apple para o desenvolvimento de aplicativos iOS e macOS.",
    link: "https://developer.apple.com/documentation/objectivec",
  },

  {
    // item 15
    title: "Perl",
    description:
      "Perl é uma linguagem de script amplamente usada para processamento de texto e automação de tarefas administrativas e de rede.",
    link: "https://www.perl.org/",
  },

  {
    // item 16
    title: "R",
    description:
      "R é uma linguagem e ambiente para computação estatística e gráficos, popular em análise de dados e machine learning.",
    link: "https://www.r-project.org/",
  },

  {
    // item 17
    title: "MATLAB",
    description:
      "MATLAB é uma linguagem de programação e ambiente de cálculo numérico usada principalmente em engenharia, simulações e ciência de dados.",
    link: "https://www.mathworks.com/products/matlab.html",
  },

  {
    // item 18
    title: "Julia",
    description:
      "Julia é uma linguagem de programação de alto desempenho para computação técnica, usada em áreas como matemática, estatística e machine learning.",
    link: "https://julialang.org/",
  },

  {
    // item 19
    title: "Scala",
    description:
      "Scala é uma linguagem de programação que combina programação orientada a objetos e funcional, popular em sistemas distribuídos e big data.",
    link: "https://www.scala-lang.org/",
  },

  {
    // item 20
    title: "Haskell",
    description:
      "Haskell é uma linguagem de programação funcional pura, conhecida por sua forte tipagem e imutabilidade, usada em pesquisa e software de alta confiabilidade.",
    link: "https://www.haskell.org/",
  },

  {
    // item 21
    title: "Lua",
    description:
      "Lua é uma linguagem de script leve e embutida, amplamente usada em jogos, sistemas embutidos e servidores web.",
    link: "https://www.lua.org/",
  },

  {
    // item 22
    title: "Bash",
    description:
      "Bash é um shell e linguagem de script amplamente utilizada em sistemas Unix e Linux para automação de tarefas e administração de sistemas.",
    link: "https://www.gnu.org/software/bash/",
  },

  {
    // item 23
    title: "Shell",
    description:
      "Shell scripting é a arte de escrever scripts para controlar a execução de tarefas e automação em sistemas Unix e Linux.",
    link: "https://en.wikipedia.org/wiki/Shell_script",
  },

  {
    // item 24
    title: "PowerShell",
    description:
      "PowerShell é uma linguagem de script poderosa da Microsoft usada para automação e gerenciamento de sistemas no Windows e no Azure.",
    link: "https://learn.microsoft.com/en-us/powershell/",
  },

  {
    // item 25
    title: "Visual Basic",
    description:
      "Visual Basic é uma linguagem de programação desenvolvida pela Microsoft, usada para criar aplicativos Windows de forma fácil e rápida.",
    link: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
  },

  {
    // item 26
    title: "F#",
    description:
      "F# é uma linguagem de programação funcional de alto nível, parte da plataforma .NET, usada para processamento de dados e computação científica.",
    link: "https://fsharp.org/",
  },

  {
    // item 27
    title: "Elm",
    description:
      "Elm é uma linguagem de programação funcional focada em criar interfaces de usuário seguras e sem erros, compilando para JavaScript.",
    link: "https://elm-lang.org/",
  },

  {
    // item 28
    title: "Elixir",
    description:
      "Elixir é uma linguagem de programação funcional construída sobre a máquina virtual Erlang, conhecida por sua escalabilidade e tolerância a falhas.",
    link: "https://elixir-lang.org/",
  },

  {
    // item 29
    title: "Erlang",
    description:
      "Erlang é uma linguagem de programação criada para sistemas distribuídos e aplicações de alta disponibilidade, como telecomunicações.",
    link: "https://www.erlang.org/",
  },

  {
    // item 30
    title: "Groovy",
    description:
      "Groovy é uma linguagem de programação dinâmica para a plataforma Java, que simplifica o desenvolvimento com sintaxe mais amigável.",
    link: "https://groovy-lang.org/",
  },

  {
    // item 31
    title: "Clojure",
    description:
      "Clojure é uma linguagem de programação funcional baseada em Lisp, com suporte para programação concorrente e rodando na máquina virtual Java.",
    link: "https://clojure.org/",
  },

  {
    // item 32
    title: "Scheme",
    description:
      "Scheme é uma das variantes mais conhecidas de Lisp, uma linguagem de programação funcional utilizada em pesquisa e educação.",
    link: "https://schemers.org/",
  },

  {
    // item 33
    title: "Lisp",
    description:
      "Lisp é uma das linguagens de programação mais antigas, conhecida por sua sintaxe distinta e uso em inteligência artificial e computação simbólica.",
    link: "https://common-lisp.net/",
  },

  {
    // item 34
    title: "Fortran",
    description:
      "Fortran é uma linguagem de programação projetada para cálculos científicos e de engenharia, sendo uma das mais antigas ainda em uso.",
    link: "https://fortran-lang.org/",
  },

  {
    // item 35
    title: "COBOL",
    description:
      "COBOL é uma linguagem de programação criada para processamento de dados em sistemas financeiros e empresariais, usada desde a década de 1960.",
    link: "https://www.microfocus.com/cobol/",
  },

  {
    // item 36
    title: "VHDL",
    description:
      "VHDL é uma linguagem de descrição de hardware usada para modelagem e simulação de circuitos eletrônicos digitais.",
    link: "https://en.wikipedia.org/wiki/VHDL",
  },

  {
    // item 37
    title: "Verilog",
    description:
      "Verilog é uma linguagem de descrição de hardware, usada no design e modelagem de circuitos digitais e semicondutores.",
    link: "https://en.wikipedia.org/wiki/Verilog",
  },

  {
    // item 38
    title: "Assembly",
    description:
      "Assembly é uma linguagem de baixo nível que interage diretamente com o hardware, permitindo maior controle sobre o desempenho e recursos do sistema.",
    link: "https://en.wikipedia.org/wiki/Assembly_language",
  },

  {
    // item 39
    title: "Ada",
    description:
      "Ada é uma linguagem de programação criada para sistemas de missão crítica, como controle de tráfego aéreo e naves espaciais.",
    link: "https://www.adacore.com/",
  },

  {
    // item 40
    title: "Prolog",
    description:
      "Prolog é uma linguagem de programação lógica usada principalmente em inteligência artificial e sistemas baseados em regras.",
    link: "https://www.swi-prolog.org/",
  },

  {
    // item 41
    title: "Smalltalk",
    description:
      "Smalltalk é uma linguagem de programação orientada a objetos, pioneira no conceito de ambiente de desenvolvimento integrado (IDE).",
    link: "https://www.smalltalk.org/",
  },

  {
    // item 42
    title: "Pascal",
    description:
      "Pascal é uma linguagem de programação estruturada, amplamente utilizada em educação para ensinar boas práticas de programação.",
    link: "https://www.freepascal.org/",
  },

  {
    // item 43
    title: "OCaml",
    description:
      "OCaml é uma linguagem de programação funcional e imperativa, usada em ciência da computação, bancos e indústrias financeiras.",
    link: "https://ocaml.org/",
  },

  {
    // item 44
    title: "Crystal",
    description:
      "Crystal é uma linguagem de programação que combina a sintaxe simples do Ruby com a performance do C, usada para sistemas de alta performance.",
    link: "https://crystal-lang.org/",
  },

  {
    // item 45
    title: "Nim",
    description:
      "Nim é uma linguagem de programação eficiente e expressiva, que combina a simplicidade de linguagens modernas com a eficiência de linguagens de sistemas.",
    link: "https://nim-lang.org/",
  },

  {
    // item 46
    title: "D",
    description:
      "D é uma linguagem de programação de sistemas, projetada para ser uma evolução do C++ com maior simplicidade e segurança.",
    link: "https://dlang.org/",
  },

  {
    // item 47
    title: "ActionScript",
    description:
      "ActionScript é uma linguagem de script usada principalmente para desenvolvimento de animações e aplicativos na plataforma Adobe Flash.",
    link: "https://en.wikipedia.org/wiki/ActionScript",
  },

  {
    // item 48
    title: "Tcl",
    description:
      "Tcl é uma linguagem de script usada em automação de testes, configuração de sistemas e desenvolvimento de interfaces gráficas.",
    link: "https://www.tcl.tk/",
  },

  {
    // item 49
    title: "Logo",
    description:
      "Logo é uma linguagem de programação educacional, conhecida pelo uso de gráficos de tartaruga para ensinar conceitos de programação a crianças.",
    link: "https://el.media.mit.edu/logo-foundation/",
  },
];
