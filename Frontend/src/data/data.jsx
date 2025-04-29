import React from 'react'

const resources =  {
  "1st": {
    "it": {
      subjects: ["Mathematics", "Physics", "Chemistry", "Programming in C"],
      pyqs: {
        Mathematics: "link_to_pyq_math",
        Physics: "link_to_pyq_physics",
      },
      notes: {
        Mathematics: "link_to_notes_math",
        Physics: "link_to_notes_physics",
      },
      books: {
        Mathematics: "link_to_books_math",
        Physics: "link_to_books_physics",
      }
    },
    "cs": {
      subjects: ["Mathematics", "Physics", "C Programming"],
      pyqs: {
        Mathematics: "link_to_pyq_math_cs",
      },
      notes: {
        Mathematics: "link_to_notes_math_cs",
      },
      books: {
        Mathematics: "link_to_books_math_cs",
      }
    }
  },
  "3rd": {
    "it": {
      subjects: ["Data Structures", "Operating Systems", "Database Management Systems"],
      pyqs: {
        "Data Structures": "link_to_pyq_ds",
        "Operating Systems": "link_to_pyq_os",
      },
      notes: {
        "Data Structures": "link_to_notes_ds",
        "Operating Systems": "link_to_notes_os",
      },
      books: {
        "Data Structures": "link_to_books_ds",
        "Operating Systems": "link_to_books_os",
      }
    },
    "cs": {
      subjects: ["Algorithms", "Networking", "Artificial Intelligence"],
      pyqs: {
        "Algorithms": "link_to_pyq_algo",
      },
      notes: {
        "Algorithms": "link_to_notes_algo",
      },
      books: {
        "Algorithms": "link_to_books_algo",
      }
    }
  }
}

export default resources
