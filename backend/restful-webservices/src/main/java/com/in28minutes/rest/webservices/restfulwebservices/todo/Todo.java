package com.in28minutes.rest.webservices.restfulwebservices.todo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String username;

    private String description;

    private Date targetDate;

    private boolean isDone;
}
