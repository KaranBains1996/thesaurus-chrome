const searchQuery = document.querySelector('#search-thesaurus');
const resultsCtn = document.querySelector('.results');
const spinner = document.querySelector('.sk-folding-cube');

const sampleResp = [
  {
    "meta": {
      "id": "existential",
      "uuid": "a81586e9-6217-4da1-b7ec-1b601c0465bd",
      "src": "coll_thes",
      "section": "alpha",
      "target": {
        "tuuid": "753a9de6-7ee8-4567-972e-942e4e65c8c9",
        "tsrc": "collegiate"
      },
      "stems": [
        "existential",
        "existentially"
      ],
      "syns": [
        [
          "empirical",
          "experiential",
          "experimental",
          "objective",
          "observational"
        ]
      ],
      "ants": [
        [
          "nonempirical",
          "theoretical",
          "unempirical"
        ]
      ],
      "offensive": false
    },
    "hwi": {
      "hw": "existential"
    },
    "fl": "adjective",
    "def": [
      {
        "sseq": [
          [
            [
              "sense",
              {
                "dt": [
                  [
                    "text",
                    "based on observation or experience "
                  ],
                  [
                    "vis",
                    [
                      {
                        "t": "child psychologist Bruno Bettelheim believed that fairy tales help children cope with their {it}existential{/it} anxieties and dilemmas"
                      }
                    ]
                  ]
                ],
                "syn_list": [
                  [
                    {
                      "wd": "empirical",
                      "wvrs": [
                        {
                          "wvl": "also",
                          "wva": "empiric"
                        }
                      ]
                    },
                    {
                      "wd": "experiential"
                    },
                    {
                      "wd": "experimental"
                    },
                    {
                      "wd": "objective"
                    },
                    {
                      "wd": "observational"
                    }
                  ]
                ],
                "rel_list": [
                  [
                    {
                      "wd": "actual"
                    },
                    {
                      "wd": "factual"
                    },
                    {
                      "wd": "genuine"
                    },
                    {
                      "wd": "hard"
                    },
                    {
                      "wd": "material"
                    },
                    {
                      "wd": "real"
                    }
                  ],
                  [
                    {
                      "wd": "accepted"
                    },
                    {
                      "wd": "established"
                    },
                    {
                      "wd": "tried"
                    },
                    {
                      "wd": "tried-and-true"
                    }
                  ],
                  [
                    {
                      "wd": "indisputable"
                    },
                    {
                      "wd": "undeniable"
                    }
                  ],
                  [
                    {
                      "wd": "demonstrable"
                    },
                    {
                      "wd": "provable"
                    },
                    {
                      "wd": "verifiable"
                    }
                  ]
                ],
                "near_list": [
                  [
                    {
                      "wd": "conjectural"
                    },
                    {
                      "wd": "hypothetical"
                    },
                    {
                      "wd": "speculative"
                    }
                  ],
                  [
                    {
                      "wd": "unproven"
                    },
                    {
                      "wd": "unsubstantiated"
                    }
                  ],
                  [
                    {
                      "wd": "metaphysical"
                    },
                    {
                      "wd": "transcendentalist"
                    },
                    {
                      "wd": "visionary"
                    }
                  ]
                ],
                "ant_list": [
                  [
                    {
                      "wd": "nonempirical"
                    },
                    {
                      "wd": "theoretical",
                      "wvrs": [
                        {
                          "wvl": "also",
                          "wva": "theoretic"
                        }
                      ]
                    },
                    {
                      "wd": "unempirical"
                    }
                  ]
                ]
              }
            ]
          ]
        ]
      }
    ],
    "shortdef": [
      "based on observation or experience"
    ]
  }
];

let typingTimer;
const doneTypingInterval = 5000;  // 5 seconds

searchQuery.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

// Run when user has finished typing
function doneTyping() {
  alert('DONE TYPING');
  spinner.classList.add('hide');
}
