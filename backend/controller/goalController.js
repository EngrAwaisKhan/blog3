import asyncHandler from 'express-async-handler';

export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get goals' });
});
export const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  console.log(req.body);
  res.status(200).json({ message: 'set goals' });
});

export const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals, ${req.params.id}` });
});

export const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals, ${req.params.id}` });
});
