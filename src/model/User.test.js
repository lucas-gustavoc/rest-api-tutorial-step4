const { default: isTaxID } = require('validator/lib/istaxid')
const User = require('./User')

test('validate with valid input', () => {
    const user = { name: 'User', email: 'user@domain.com', password: 'password' }
    expect(User.validate(user)).toBeTruthy()
})

test('invalidate without name', () => {
    const user = { email: 'user@domain.com', password: 'password' }
    expect(User.validate(user)).toBeFalsy()
})

test('invalidate without email', () => {
    const user = { name: 'User', password: 'password' }
    expect(User.validate(user)).toBeFalsy()
})

test('invalidate without password', () => {
    const user = { name: 'User', email: 'user@domain.com' }
    expect(User.validate(user)).toBeFalsy()
})

test('invalidate with bad email', () => {
    const user = { name: 'User', email: 'not-email', password: 'password' }
    expect(User.validate(user)).toBeFalsy()
})

test('get one user by email', () => {
    // Saving original
    const original = User.users

    // Mocking
    const userEmail = 'user@domain.com'
    const user = { name: 'User', email: userEmail, password: 'password' }
    User.users = [user]

    // Testing
    expect(User.getOneByEmail(userEmail)).toBe(user)

    // Restoring
    User.users = original
})

test('fail getting an user by a nonexistent email', () => {
    expect(User.getOneByEmail('nonexistent@domain.com')).toBeUndefined()
})

describe('create a new user', () => {
    const original = User.users
    const password = 'super_secret'
    let user
    let createdUser
    
    beforeAll(() => {
        user = User.create({ name: 'User', email: 'user@domain.com', password })
        createdUser = User.getOneByEmail(user.email)
    })

    afterAll(() => {
        User.users = original
    })

    it('read the created user', () => {
        expect(user.name).toEqual(createdUser.name)
        expect(user.email).toEqual(createdUser.email)
        expect(user.id).toBeDefined()
        expect(user.password).toBeDefined()
    })

    it('successfully validate a given password against the stored one', () => {
        expect(User.comparePassword(password, createdUser.password)).toBeTruthy()
    })
})