package com.bookverse.demo.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User getUserById(int id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User with ID " + id + " not found."));
    }

    public User addUser(User user) {
        return repo.save(user);
    }

    public User updateUser(int id, User user) {
        user.setId(id);
        return repo.save(user);
    }

    public void deleteUser(int id) {
        repo.deleteById(id);
    }
    
    public User getProfile() {

        return repo.findById(1)
                .orElseThrow(() -> new RuntimeException("Profile not found."));

    }

    public User updateProfile(User user) {

        user.setId(1);

        return repo.save(user);

    }

}