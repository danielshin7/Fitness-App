package com.fitnessapp.backend.entity;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "Meal")
public class Meal {

    @Id
    @Column(name = "MealID", length = 45)
    private String mealId;

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "User_ID")
    private User user;

    @Column(name = "Date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(name = "Time")
    @Temporal(TemporalType.TIME)
    private Time time;

    // Constructors, getters, and setters

    public Meal() {
        // no-args constructor
    }

    // getters and setters for each field
    public String getMealId() {
        return mealId;
    }

    public void setMealId(String mealId) {
        this.mealId = mealId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
