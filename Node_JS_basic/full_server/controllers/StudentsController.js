import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2] || '';

    readDatabase(dbPath)
      .then((fields) => {
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        let responseText = 'This is the list of our students';

        for (const field of sortedFields) {
          const names = fields[field];
          responseText += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }

        res.status(200).send(responseText);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2] || '';
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbPath)
      .then((fields) => {
        if (!fields[major]) {
          res.status(200).send('List: ');
          return;
        }
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
