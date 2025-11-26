package com.appdevg6.ctrl_plus_shift.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "comelec")
public class ComelecEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer comelecID;

    @OneToOne
    @JoinColumn(name = "userID", referencedColumnName = "userID")
    private UserEntity user;

    private String comelecLevel;
    private String department;

    public Integer getComelecID() {
        return comelecID;
    }
    public void setComelecID(Integer comelecID) {
        this.comelecID = comelecID;
    }
    public UserEntity getUser() {
        return user;
    }
    public void setUser(UserEntity user) {
        this.user = user;
    }
    public String getComelecLevel() {
        return comelecLevel;
    }
    public void setComelecLevel(String comelecLevel) {
        this.comelecLevel = comelecLevel;
    }
    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }
}
