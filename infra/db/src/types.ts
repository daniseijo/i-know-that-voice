export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Actor: {
        Row: {
          id: number
          name: string | null
          profile_path: string | null
        }
        Insert: {
          id: number
          name?: string | null
          profile_path?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          profile_path?: string | null
        }
        Relationships: []
      }
      Character: {
        Row: {
          id: number
          movie_id: number | null
          name_in_media: string | null
          original_actor_id: number | null
        }
        Insert: {
          id: number
          movie_id?: number | null
          name_in_media?: string | null
          original_actor_id?: number | null
        }
        Update: {
          id?: number
          movie_id?: number | null
          name_in_media?: string | null
          original_actor_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Character_movie_id_fkey"
            columns: ["movie_id"]
            isOneToOne: false
            referencedRelation: "Movie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Character_original_actor_id_fkey"
            columns: ["original_actor_id"]
            isOneToOne: false
            referencedRelation: "Actor"
            referencedColumns: ["id"]
          },
        ]
      }
      Crawl_Status: {
        Row: {
          entity_id: number | null
          entity_type: string | null
          id: number
          imdb_id: string | null
          letterboxd_id: string | null
          source_url: string | null
          state: string | null
          tmdb_id: number | null
        }
        Insert: {
          entity_id?: number | null
          entity_type?: string | null
          id: number
          imdb_id?: string | null
          letterboxd_id?: string | null
          source_url?: string | null
          state?: string | null
          tmdb_id?: number | null
        }
        Update: {
          entity_id?: number | null
          entity_type?: string | null
          id?: number
          imdb_id?: string | null
          letterboxd_id?: string | null
          source_url?: string | null
          state?: string | null
          tmdb_id?: number | null
        }
        Relationships: []
      }
      Dub_Actor: {
        Row: {
          dubbing_languages: string | null
          featured_roles_notes: string | null
          id: number
          name: string | null
          profile_path: string | null
          skills: string | null
          status: string | null
          voice_type_age: string | null
          voiceover_languages: string | null
        }
        Insert: {
          dubbing_languages?: string | null
          featured_roles_notes?: string | null
          id: number
          name?: string | null
          profile_path?: string | null
          skills?: string | null
          status?: string | null
          voice_type_age?: string | null
          voiceover_languages?: string | null
        }
        Update: {
          dubbing_languages?: string | null
          featured_roles_notes?: string | null
          id?: number
          name?: string | null
          profile_path?: string | null
          skills?: string | null
          status?: string | null
          voice_type_age?: string | null
          voiceover_languages?: string | null
        }
        Relationships: []
      }
      Dubbing_Cast: {
        Row: {
          character_id: number | null
          dub_actor_id: number | null
          id: number
        }
        Insert: {
          character_id?: number | null
          dub_actor_id?: number | null
          id: number
        }
        Update: {
          character_id?: number | null
          dub_actor_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Dubbing_Cast_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "Character"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Dubbing_Cast_dub_actor_id_fkey"
            columns: ["dub_actor_id"]
            isOneToOne: false
            referencedRelation: "Dub_Actor"
            referencedColumns: ["id"]
          },
        ]
      }
      Movie: {
        Row: {
          backdrop_path: string | null
          budget: number | null
          genres: Database["public"]["Enums"]["Genre_Type"][] | null
          homepage_url: string | null
          id: number
          is_adult: boolean | null
          original_language: Database["public"]["Enums"]["Language"] | null
          original_title: string | null
          overview: string | null
          poster_path: string | null
          production_countries: Database["public"]["Enums"]["Country"][] | null
          release_date: string | null
          revenue: number | null
          runtime_minutes: number | null
          spoken_languages: Database["public"]["Enums"]["Language"][] | null
          tagline: string | null
          title: string | null
        }
        Insert: {
          backdrop_path?: string | null
          budget?: number | null
          genres?: Database["public"]["Enums"]["Genre_Type"][] | null
          homepage_url?: string | null
          id: number
          is_adult?: boolean | null
          original_language?: Database["public"]["Enums"]["Language"] | null
          original_title?: string | null
          overview?: string | null
          poster_path?: string | null
          production_countries?: Database["public"]["Enums"]["Country"][] | null
          release_date?: string | null
          revenue?: number | null
          runtime_minutes?: number | null
          spoken_languages?: Database["public"]["Enums"]["Language"][] | null
          tagline?: string | null
          title?: string | null
        }
        Update: {
          backdrop_path?: string | null
          budget?: number | null
          genres?: Database["public"]["Enums"]["Genre_Type"][] | null
          homepage_url?: string | null
          id?: number
          is_adult?: boolean | null
          original_language?: Database["public"]["Enums"]["Language"] | null
          original_title?: string | null
          overview?: string | null
          poster_path?: string | null
          production_countries?: Database["public"]["Enums"]["Country"][] | null
          release_date?: string | null
          revenue?: number | null
          runtime_minutes?: number | null
          spoken_languages?: Database["public"]["Enums"]["Language"][] | null
          tagline?: string | null
          title?: string | null
        }
        Relationships: []
      }
      Movie_Staff: {
        Row: {
          movie_id: number
          role: string
          staff_id: number
        }
        Insert: {
          movie_id: number
          role: string
          staff_id: number
        }
        Update: {
          movie_id?: number
          role?: string
          staff_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Movie_Staff_movie_id_fkey"
            columns: ["movie_id"]
            isOneToOne: false
            referencedRelation: "Movie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Movie_Staff_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "Staff"
            referencedColumns: ["id"]
          },
        ]
      }
      Regular_Voice_Assignments: {
        Row: {
          dub_actor_id: number
          original_actor_id: number
        }
        Insert: {
          dub_actor_id: number
          original_actor_id: number
        }
        Update: {
          dub_actor_id?: number
          original_actor_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Regular_Voice_Assignments_dub_actor_id_fkey"
            columns: ["dub_actor_id"]
            isOneToOne: false
            referencedRelation: "Dub_Actor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Regular_Voice_Assignments_original_actor_id_fkey"
            columns: ["original_actor_id"]
            isOneToOne: false
            referencedRelation: "Actor"
            referencedColumns: ["id"]
          },
        ]
      }
      Staff: {
        Row: {
          id: number
          name: string | null
          profile_path: string | null
        }
        Insert: {
          id: number
          name?: string | null
          profile_path?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          profile_path?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Country:
        | "US"
        | "GB"
        | "ES"
        | "FR"
        | "DE"
        | "JP"
        | "CA"
        | "AU"
        | "IT"
        | "CN"
        | "IN"
        | "KR"
      Genre_Type:
        | "Action"
        | "Adventure"
        | "Animation"
        | "Comedy"
        | "Crime"
        | "Documentary"
        | "Drama"
        | "Family"
        | "Fantasy"
        | "History"
        | "Horror"
        | "Music"
        | "Mystery"
        | "Romance"
        | "Science_Fiction"
        | "TV_Movie"
        | "Thriller"
        | "War"
        | "Western"
      Language:
        | "en"
        | "es"
        | "fr"
        | "de"
        | "it"
        | "ja"
        | "pt"
        | "ru"
        | "zh"
        | "ko"
        | "hi"
        | "ar"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      Country: [
        "US",
        "GB",
        "ES",
        "FR",
        "DE",
        "JP",
        "CA",
        "AU",
        "IT",
        "CN",
        "IN",
        "KR",
      ],
      Genre_Type: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Mystery",
        "Romance",
        "Science_Fiction",
        "TV_Movie",
        "Thriller",
        "War",
        "Western",
      ],
      Language: [
        "en",
        "es",
        "fr",
        "de",
        "it",
        "ja",
        "pt",
        "ru",
        "zh",
        "ko",
        "hi",
        "ar",
      ],
    },
  },
} as const

