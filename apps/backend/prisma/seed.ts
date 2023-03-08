import argon2 from 'argon2'
import { prisma } from './client'

const users = [
  {
    name: 'admin',
    email: 'admin@test.com',
    password: 'admin123',
  },
  {
    name: 'Test',
    email: 'test@test.com',
    password: 'test123',
  },
]

const deleteData = async () => {
  console.log('Delete all existing users ...')

  await prisma.user.deleteMany({})

  console.log('Deleted all existing users.')
}

const seed = async () => {
  console.log('Start seeding ...')

  const hashedUsers = await Promise.all(
    users.map(async user => ({
      ...user,
      password: await argon2.hash(user.password),
    }))
  )

  await prisma.user.createMany({
    data: hashedUsers,
  })

  console.log('Seeding finished.')
}

const main = async () => {
  await deleteData()
  await seed()
}

main()
