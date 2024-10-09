export const SAMPLE_RUNNER_DATA = {
  "only": [],
  "registry": {
    "1": {
      "id": 1,
      "isRoot": true,
      "name": "root spec",
      "parent": 0,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0
      },
      "children": [
        {
          "id": 2,
          "isRoot": false,
          "name": "sample spec 1",
          "parent": 1,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0
          },
          "target": {
            "sample spec 1/3": {
              "sample spec 1/3/1": {
                "sample spec 1/3/1/2": {}
              }
            }
          },
          "children": [
            {
              "id": 3,
              "isRoot": false,
              "name": "sample spec 1/1",
              "parent": 2,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0,
                "status": "pass"
              }
            },
            {
              "id": 4,
              "isRoot": false,
              "name": "sample spec 1/2",
              "parent": 2,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0,
                "status": "pass"
              }
            },
            {
              "id": 5,
              "isRoot": false,
              "name": "sample spec 1/3",
              "parent": 2,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0
              },
              "target": {
                "sample spec 1/3/1": {
                  "sample spec 1/3/1/2": {}
                }
              },
              "children": [
                {
                  "id": 6,
                  "isRoot": false,
                  "name": "sample spec 1/3/1",
                  "parent": 5,
                  "stats": {
                    "duration": 0,
                    "end": 0,
                    "result": "todo",
                    "start": 0
                  },
                  "target": {
                    "sample spec 1/3/1/2": {}
                  },
                  "children": [
                    {
                      "id": 7,
                      "isRoot": false,
                      "name": "sample spec 1/3/1/1",
                      "parent": 6,
                      "stats": {
                        "duration": 0,
                        "end": 0,
                        "result": "todo",
                        "start": 0,
                        "status": "pass"
                      }
                    },
                    {
                      "id": 8,
                      "isRoot": false,
                      "name": "sample spec 1/3/1/2",
                      "parent": 6,
                      "stats": {
                        "duration": 0,
                        "end": 0,
                        "result": "todo",
                        "start": 0
                      },
                      "target": {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": 9,
          "isRoot": false,
          "name": "sample spec 2",
          "parent": 1,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0,
            "status": "pass"
          }
        },
        {
          "id": 10,
          "isRoot": false,
          "name": "sample spec 3",
          "parent": 1,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0,
            "status": "pass"
          }
        }
      ]
    },
    "2": {
      "id": 2,
      "isRoot": false,
      "name": "sample spec 1",
      "parent": 1,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0
      },
      "target": {
        "sample spec 1/3": {
          "sample spec 1/3/1": {
            "sample spec 1/3/1/2": {}
          }
        }
      },
      "children": [
        {
          "id": 3,
          "isRoot": false,
          "name": "sample spec 1/1",
          "parent": 2,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0,
            "status": "pass"
          }
        },
        {
          "id": 4,
          "isRoot": false,
          "name": "sample spec 1/2",
          "parent": 2,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0,
            "status": "pass"
          }
        },
        {
          "id": 5,
          "isRoot": false,
          "name": "sample spec 1/3",
          "parent": 2,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0
          },
          "target": {
            "sample spec 1/3/1": {
              "sample spec 1/3/1/2": {}
            }
          },
          "children": [
            {
              "id": 6,
              "isRoot": false,
              "name": "sample spec 1/3/1",
              "parent": 5,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0
              },
              "target": {
                "sample spec 1/3/1/2": {}
              },
              "children": [
                {
                  "id": 7,
                  "isRoot": false,
                  "name": "sample spec 1/3/1/1",
                  "parent": 6,
                  "stats": {
                    "duration": 0,
                    "end": 0,
                    "result": "todo",
                    "start": 0,
                    "status": "pass"
                  }
                },
                {
                  "id": 8,
                  "isRoot": false,
                  "name": "sample spec 1/3/1/2",
                  "parent": 6,
                  "stats": {
                    "duration": 0,
                    "end": 0,
                    "result": "todo",
                    "start": 0
                  },
                  "target": {}
                }
              ]
            }
          ]
        }
      ]
    },
    "3": {
      "id": 3,
      "isRoot": false,
      "name": "sample spec 1/1",
      "parent": 2,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0,
        "status": "pass"
      }
    },
    "4": {
      "id": 4,
      "isRoot": false,
      "name": "sample spec 1/2",
      "parent": 2,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0,
        "status": "pass"
      }
    },
    "5": {
      "id": 5,
      "isRoot": false,
      "name": "sample spec 1/3",
      "parent": 2,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0
      },
      "target": {
        "sample spec 1/3/1": {
          "sample spec 1/3/1/2": {}
        }
      },
      "children": [
        {
          "id": 6,
          "isRoot": false,
          "name": "sample spec 1/3/1",
          "parent": 5,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0
          },
          "target": {
            "sample spec 1/3/1/2": {}
          },
          "children": [
            {
              "id": 7,
              "isRoot": false,
              "name": "sample spec 1/3/1/1",
              "parent": 6,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0,
                "status": "pass"
              }
            },
            {
              "id": 8,
              "isRoot": false,
              "name": "sample spec 1/3/1/2",
              "parent": 6,
              "stats": {
                "duration": 0,
                "end": 0,
                "result": "todo",
                "start": 0
              },
              "target": {}
            }
          ]
        }
      ]
    },
    "6": {
      "id": 6,
      "isRoot": false,
      "name": "sample spec 1/3/1",
      "parent": 5,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0
      },
      "target": {
        "sample spec 1/3/1/2": {}
      },
      "children": [
        {
          "id": 7,
          "isRoot": false,
          "name": "sample spec 1/3/1/1",
          "parent": 6,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0,
            "status": "pass"
          }
        },
        {
          "id": 8,
          "isRoot": false,
          "name": "sample spec 1/3/1/2",
          "parent": 6,
          "stats": {
            "duration": 0,
            "end": 0,
            "result": "todo",
            "start": 0
          },
          "target": {}
        }
      ]
    },
    "7": {
      "id": 7,
      "isRoot": false,
      "name": "sample spec 1/3/1/1",
      "parent": 6,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0,
        "status": "pass"
      }
    },
    "8": {
      "id": 8,
      "isRoot": false,
      "name": "sample spec 1/3/1/2",
      "parent": 6,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0
      },
      "target": {}
    },
    "9": {
      "id": 9,
      "isRoot": false,
      "name": "sample spec 2",
      "parent": 1,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0,
        "status": "pass"
      }
    },
    "10": {
      "id": 10,
      "isRoot": false,
      "name": "sample spec 3",
      "parent": 1,
      "stats": {
        "duration": 0,
        "end": 0,
        "result": "todo",
        "start": 0,
        "status": "pass"
      }
    }
  },
  "root": {
    "id": 1,
    "isRoot": true,
    "name": "root spec",
    "parent": 0,
    "stats": {
      "duration": 0,
      "end": 0,
      "result": "todo",
      "start": 0
    },
    "children": [
      {
        "id": 2,
        "isRoot": false,
        "name": "sample spec 1",
        "parent": 1,
        "stats": {
          "duration": 0,
          "end": 0,
          "result": "todo",
          "start": 0
        },
        "target": {
          "sample spec 1/3": {
            "sample spec 1/3/1": {
              "sample spec 1/3/1/2": {}
            }
          }
        },
        "children": [
          {
            "id": 3,
            "isRoot": false,
            "name": "sample spec 1/1",
            "parent": 2,
            "stats": {
              "duration": 0,
              "end": 0,
              "result": "todo",
              "start": 0,
              "status": "pass"
            }
          },
          {
            "id": 4,
            "isRoot": false,
            "name": "sample spec 1/2",
            "parent": 2,
            "stats": {
              "duration": 0,
              "end": 0,
              "result": "todo",
              "start": 0,
              "status": "pass"
            }
          },
          {
            "id": 5,
            "isRoot": false,
            "name": "sample spec 1/3",
            "parent": 2,
            "stats": {
              "duration": 0,
              "end": 0,
              "result": "todo",
              "start": 0
            },
            "target": {
              "sample spec 1/3/1": {
                "sample spec 1/3/1/2": {}
              }
            },
            "children": [
              {
                "id": 6,
                "isRoot": false,
                "name": "sample spec 1/3/1",
                "parent": 5,
                "stats": {
                  "duration": 0,
                  "end": 0,
                  "result": "todo",
                  "start": 0
                },
                "target": {
                  "sample spec 1/3/1/2": {}
                },
                "children": [
                  {
                    "id": 7,
                    "isRoot": false,
                    "name": "sample spec 1/3/1/1",
                    "parent": 6,
                    "stats": {
                      "duration": 0,
                      "end": 0,
                      "result": "todo",
                      "start": 0,
                      "status": "pass"
                    }
                  },
                  {
                    "id": 8,
                    "isRoot": false,
                    "name": "sample spec 1/3/1/2",
                    "parent": 6,
                    "stats": {
                      "duration": 0,
                      "end": 0,
                      "result": "todo",
                      "start": 0
                    },
                    "target": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 9,
        "isRoot": false,
        "name": "sample spec 2",
        "parent": 1,
        "stats": {
          "duration": 0,
          "end": 0,
          "result": "todo",
          "start": 0,
          "status": "pass"
        }
      },
      {
        "id": 10,
        "isRoot": false,
        "name": "sample spec 3",
        "parent": 1,
        "stats": {
          "duration": 0,
          "end": 0,
          "result": "todo",
          "start": 0,
          "status": "pass"
        }
      }
    ]
  },
  "idcounter": 10,
  "stats": {
    "fail": 0,
    "pass": 5,
    "todo": 1
  }
}
