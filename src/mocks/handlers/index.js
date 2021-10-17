import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';
import { db } from 'mocks/db';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups: db.group.getAll(),
      })
    );
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    const matchingStudents = db.student.findMany({
      where: {
        group: {
          equals: req.params.id,
        },
      },
    });
    if (req.params.id) {
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }
    return res(ctx.status(200), ctx.json(db.student.getAll()));
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    const matchingStudent = db.student.findFirst({
      where: {
        id: {
          equals: req.params.id,
        },
      },
    });

    if (!matchingStudent) {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'No matching student found',
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        student: matchingStudent,
      })
    );
  }),
  rest.post('/students/search', (req, res, ctx) => {
    console.log(req.body.searchPhrase);
    const matchingStudents = db.student.findMany({
      where: {
        name: {
          contains: req.body.searchPhrase,
        },
      },
    });
    console.log(matchingStudents);
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
];
