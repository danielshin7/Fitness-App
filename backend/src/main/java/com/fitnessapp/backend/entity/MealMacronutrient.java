package com.fitnessapp.backend.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "MealMacronutrient")
public class MealMacronutrient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "MealID")
    private Meal mealId;

    @Column(name = "MacronutrientID")
    private String macronutrientId;

    @Column(name = "Amount", precision = 10, scale = 2)
    private BigDecimal amount;

    // Constructors, getters, and setters

    public MealMacronutrient() {
        // no-args constructor
    }

    // getters and setters for each field
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMealId() {
        return mealId;
    }

    public void setMealId(Integer mealId) {
        this.mealId = mealId;
    }

    public String getMacronutrientId() {
        return macronutrientId;
    }

    public void setMacronutrientId(String macronutrientId) {
        this.macronutrientId = macronutrientId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
