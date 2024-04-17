package com.fitnessapp.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "Macronutrient")
public class Macronutrient {

    @Id
    @Column(name = "Name", length = 255)
    private String name;

    @Column(name = "Macronutrient", length = 255)
    private String macronutrient;

    // Constructors, getters, and setters

    public Macronutrient() {
        // no-args constructor
    }

    // getters and setters for each field
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMacronutrient() {
        return macronutrient;
    }

    public void setMacronutrient(String macronutrient) {
        this.macronutrient = macronutrient;
    }
}
