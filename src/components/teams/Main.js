import * as React from 'react';
import { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { UserContext } from '../../contexts/UserContext';

export default function Main() {
  const { User } = useContext(UserContext);
  console.log(`${User.name}`);
  return <Typography>{User.name}</Typography>;
}
