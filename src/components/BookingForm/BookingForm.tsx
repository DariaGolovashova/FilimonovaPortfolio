'use client';

import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createBooking } from '@/src/lib/api/camper';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

interface BookingProps {
  camperId: string;
}

const BookingForm = ({ camperId }: BookingProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameEr, setNameEr] = useState('');
  const [emailEr, setEmailEr] = useState('');

  const bookingMutation = useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      createBooking(camperId, data),

    onSuccess: () => {
      toast.success('Booking created!');
      setName('');
      setEmail('');
      setNameEr('');
      setEmailEr('');
    },

    onError: (error: any) => {
      console.log('Booking error:', error?.response?.data);
      toast.error(error?.response?.data?.message || 'Something went wrong');
    },
  });

  const validate = () => {
    let isValid = true;

    if (name.trim().length < 2) {
      setNameEr('Please enter your full name.');
      isValid = false;
    } else {
      setNameEr('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailEr('Invalid email address');
      isValid = false;
    } else {
      setEmailEr('');
    }
    return isValid;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;
    bookingMutation.mutate({
      name,
      email,
    });
  };
  return (
    <form className={css.bookingForm} onSubmit={onSubmit}>
      <h3> Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <input
        className={`${css.inputBooking} ${nameEr ? css.error : ''}`}
        placeholder="Name*"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameEr && <p className={css.errorText}>{nameEr}</p>}

      <input
        className={`${css.inputBooking} ${emailEr ? css.error : ''}`}
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailEr && <p className={css.errorText}>{emailEr}</p>}

      <button className={css.button} type="submit">
        {bookingMutation.isPending ? 'Sending...' : 'Book now'}
      </button>
    </form>
  );
};

export default BookingForm;
