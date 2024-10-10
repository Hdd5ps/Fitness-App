import javax.persistence.*;

@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int sets;
    private int reps;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workout;

    // Getters and Setters
}