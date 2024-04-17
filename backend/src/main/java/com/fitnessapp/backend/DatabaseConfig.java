package com.fitnessapp.backend.config; // Replace with your actual package name

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/fitnessappdb");
        dataSource.setUsername("root");
        dataSource.setPassword("Solomon12$");
        return dataSource;
    }
    @Autowired
    private DataSource dataSource;

    public void someDatabaseOperation() {
    try (Connection conn = dataSource.getConnection()) {
        // Use the connection
    } catch (SQLException e) {
        // Handle exceptions
    }
    }

}

