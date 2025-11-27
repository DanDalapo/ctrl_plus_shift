    package com.appdevg6.ctrl_plus_shift.entity;

    import jakarta.persistence.*;

    @Entity
    @Table(name = "candidate")
    public class CandidateEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer candidateID;

        @OneToOne
        @JoinColumn(name = "userID", referencedColumnName = "userID")
        private UserEntity user;

        private String course;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "platformID", referencedColumnName = "platform_id")
        private PlatformEntity platform;

        @ManyToOne
        @JoinColumn(name = "positionID", referencedColumnName = "position_id")
        private PositionEntity position;

        public Integer getCandidateID() {
            return candidateID;
        }

        public void setCandidateID(Integer candidateID) {
            this.candidateID = candidateID;
        }

        public UserEntity getUser() {
            return user;
        }

        public void setUser(UserEntity user) {
            this.user = user;
        }

        public String getCourse() {
            return course;
        }

        public void setCourse(String course) {
            this.course = course;
        }

        public PlatformEntity getPlatform() {
            return platform;
        }

        public void setPlatform(PlatformEntity platform) {
            this.platform = platform;
        }

        public PositionEntity getPosition() {
            return position;
        }

        public void setPosition(PositionEntity position) {
            this.position = position;
        }
    }