-- Create ENUM types for the database

CREATE TYPE "Genre_Type" AS ENUM (
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science_Fiction',
  'TV_Movie',
  'Thriller',
  'War',
  'Western'
);

CREATE TYPE "Language" AS ENUM (
  'en',
  'es',
  'fr',
  'de',
  'it',
  'ja',
  'pt',
  'ru',
  'zh',
  'ko',
  'hi',
  'ar'
);

CREATE TYPE "Country" AS ENUM (
  'US',
  'GB',
  'ES',
  'FR',
  'DE',
  'JP',
  'CA',
  'AU',
  'IT',
  'CN',
  'IN',
  'KR'
);
