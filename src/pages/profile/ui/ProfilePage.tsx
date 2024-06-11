import { Layout } from '@widgets/layout';
import { GetServerSideProps } from 'next';
import { ProfilePageProps } from './ProfilePage.types';
import { executeRequest } from '@shared/api';
import { userService } from '@entities/user';
import { getAuth } from '@clerk/nextjs/server';
import { ProfileSection } from '@widgets/profile-section';
import { shelterService } from '@entities/shelter';
import { SheltersProfileSection } from '@widgets/shelters-profile-section';
import React from 'react';

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async ({ req }) => {
  const { userId } = getAuth(req);
  // todo Проверка user на null
  const userResponse = await executeRequest(() => userService.getOne(userId as string));

  if (userResponse.error) {
    throw new Error(userResponse.error);
  }
  const user = userResponse.data;

  const shelterResponse = await executeRequest(() => shelterService.getByUser(user.id));

  return {
    props: {
      user,
      shelters: shelterResponse.data || [],
    },
  };
};

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, shelters }) => {
  return (
    <Layout>
      <ProfileSection user={user} />
      <SheltersProfileSection shelters={shelters} />
    </Layout>
  );
};
