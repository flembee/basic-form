import React from 'react'

import { Dashboard, LandingPage } from './'

import { isAuthenticated } from '../services'

export function Home () {
  return (
    isAuthenticated()
      ? (
          <Dashboard />
      ) : (
          <LandingPage />   
      )  
  );
}